import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Phone, Mail, Clock, MapPin, Send, Shield, CheckCircle, Headphones } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import emailjs from 'emailjs-com';

// Updated schema with new fields matching the form
const formSchema = z.object({
  subject: z.string().min(1, 'Valitse yhteydenoton aihe'),
  name: z.string().min(2, 'Nimi on pakollinen'),
  phone: z.string().min(5, 'Puhelinnumero on pakollinen'),
  email: z.string().email('Syötä kelvollinen sähköpostiosoite'),
  message: z.string().min(1, 'Viesti on pakollinen'),
  privacy: z.boolean().refine(val => val === true, 'Hyväksy henkilötietojenkäsittely'),
  honeypot: z.string().max(0, 'Bot detected'),
  timestamp: z.number()
});

type FormValues = z.infer<typeof formSchema>;

// EmailJS configuration
const EMAILJS_SERVICE_ID = "service_6r9m8wf";
const EMAILJS_TEMPLATE_ID = "template_on07od7";
const EMAILJS_PUBLIC_KEY = "wRFDBmEPD5mCrpb2a";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStartTime] = useState<number>(Date.now());
  const navigate = useNavigate();
  
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      subject: '',
      name: '',
      phone: '',
      email: '',
      message: '',
      privacy: false,
      honeypot: '',
      timestamp: formStartTime
    }
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      // Bot checks
      if (data.honeypot) {
        toast({
          title: "Virhe",
          description: "Lomakkeen lähetyksessä tapahtui virhe. Yritä uudelleen.",
          variant: "destructive"
        });
        return;
      }
      
      const timeDiff = Date.now() - data.timestamp;
      if (timeDiff < 3000) {
        toast({
          title: "Virhe",
          description: "Tarkista viestisi ennen lähettämistä.",
          variant: "destructive"
        });
        setIsSubmitting(false);
        return;
      }
      
      const { honeypot, timestamp, privacy, ...emailData } = data;
      
      const templateParams = {
        subject: emailData.subject,
        from_name: emailData.name,
        phone: emailData.phone,
        from_email: emailData.email,
        message: `Yhteydenotto: ${emailData.subject}

Lähettäjän tiedot:
Nimi: ${emailData.name}
Sähköposti: ${emailData.email}
Puhelinnumero: ${emailData.phone}

Viesti:
${emailData.message}`,
        to_name: 'OmaVerkkoturva Team',
        reply_to: emailData.email
      };
      
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );
      
      toast({
        title: "Viesti lähetetty!",
        description: "Otamme sinuun yhteyttä pian.",
        variant: "default"
      });

      form.reset({
        subject: '',
        name: '',
        phone: '',
        email: '',
        message: '',
        privacy: false,
        honeypot: '',
        timestamp: Date.now()
      });
    } catch (error) {
      console.error('Error sending email:', error);
      
      toast({
        title: "Virhe",
        description: "Viestin lähetyksessä tapahtui virhe. Yritä myöhemmin uudelleen.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Ota yhteyttä</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Olemme täällä auttamassa sinua. Pyrimme vastaamaan yhteydenottoihin nopeasti ja tarjoamaan sinulle parhaan mahdollisen palvelun.
          </p>
        </div>

        {/* Main content - Service Promise and Contact Form side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Left side - Service Promise and Contact Cards */}
          <div className="space-y-8 mt-16">
            {/* Service Promise */}
            <div className="bg-blue-50/40 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-blue-200/40 h-fit relative pl-6 border-l-4" style={{ borderLeftColor: 'rgb(30, 42, 94)' }}>
              <div className="mb-4">
                <div className="flex items-center space-x-3">
                  <div className="rounded-xl p-3" style={{
                    background: `linear-gradient(135deg, #1e2a5e 0%, #1e3a8a 100%)`
                  }}>
                    <Headphones className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Asiakaspalvelu</h3>
                </div>
              </div>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Asiakkaanamme olet oikeutettu nopeaan sekä veloituksettomaan apuun ja tukeen. Pyrimme vastaamaan sähköpostiyhteydenottoihin 1–2 arkipäivän sisällä.
                </p>
                <p className="text-gray-700/90">
                  Ystävällisesti huomioithan, että palveluiden irtisanomiset hoidetaan puhelimitse, jotta voimme varmistaa asian sujuvan hoidon.
                </p>
              </div>
            </div>

            {/* Contact info cards */}
            <div className="grid grid-cols-1 gap-6">
              {/* Email Card */}
              <div className="bg-blue-50/40 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-200/40">
                <div className="flex items-start space-x-4">
                  <div className="rounded-xl p-3 flex-shrink-0" style={{
                    background: `linear-gradient(135deg, #1e2a5e 0%, #1e3a8a 100%)`
                  }}>
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 tracking-tight">Sähköposti</h3>
                    <a 
                      href="mailto:tuki@omaverkkoturva.fi" 
                      className="text-gray-900 hover:text-gray-700 font-semibold text-lg hover:underline transition-colors"
                    >
                      tuki@omaverkkoturva.fi
                    </a>
                    <div className="mt-3 block w-fit">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-blue-200/60 text-blue-900 bg-white/60 text-xs align-middle">
                        <Clock className="w-3.5 h-3.5" />
                        <span>Vastausaika 1–2 arkipäivää</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone Card */}
              <div className="bg-blue-50/40 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-200/40">
                <div className="flex items-start space-x-4">
                  <div className="rounded-xl p-3 flex-shrink-0" style={{
                    background: `linear-gradient(135deg, #1e2a5e 0%, #1e3a8a 100%)`
                  }}>
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 tracking-tight">Puhelin</h3>
                    <a 
                      href="tel:0290023232" 
                      className="text-gray-900 hover:text-gray-700 font-medium text-lg hover:underline transition-colors"
                    >
                      0290023232
                    </a>
                    <div className="mt-3 flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full border border-blue-200/60 text-blue-900 bg-white/60 text-xs">
                        <Clock className="w-3.5 h-3.5 mr-1" /> Ma–Pe 10:00–16:00
                      </span>
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full border border-gray-300/60 text-gray-700 bg-white/60 text-xs">
                        Puhelun hinta: mpm/pvm
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form - Right side */}
          <div className="bg-white rounded-3xl p-10 shadow-2xl border border-gray-100 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-green-500/10 to-blue-500/10 rounded-full translate-y-12 -translate-x-12"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Lähetä viesti</h2>
                <p className="text-gray-600">Täytä lomake ja otamme sinuun yhteyttä pian</p>
              </div>
              
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField 
                  control={form.control} 
                  name="subject" 
                  render={({ field }) => (
                    <FormItem>
                        <FormLabel className="text-gray-900 font-semibold text-base">Yhteydenoton aihe *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                            <SelectTrigger className="bg-gray-50 text-gray-900 border-gray-200 h-12 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all">
                            <SelectValue placeholder="Valitse aihe" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="tuki">Tuki ja apu</SelectItem>
                          <SelectItem value="laskutus">Laskutus</SelectItem>
                          <SelectItem value="tekninen">Tekninen ongelma</SelectItem>
                          <SelectItem value="muu">Muu aihe</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField 
                  control={form.control} 
                  name="name" 
                  render={({ field }) => (
                    <FormItem>
                          <FormLabel className="text-gray-900 font-semibold text-base">Etu- ja sukunimi *</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Etu- ja sukunimi" 
                              className="bg-gray-50 text-gray-900 placeholder-gray-500 border-gray-200 h-12 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField 
                  control={form.control} 
                  name="phone" 
                  render={({ field }) => (
                    <FormItem>
                          <FormLabel className="text-gray-900 font-semibold text-base">Puhelinnumero *</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="044 123 4567" 
                              className="bg-gray-50 text-gray-900 placeholder-gray-500 border-gray-200 h-12 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                  </div>
                
                <FormField 
                  control={form.control} 
                  name="email" 
                  render={({ field }) => (
                    <FormItem>
                        <FormLabel className="text-gray-900 font-semibold text-base">Sähköpostiosoite *</FormLabel>
                      <FormControl>
                        <Input 
                          type="email" 
                          placeholder="esimerkki@esimerkki.fi" 
                            className="bg-gray-50 text-gray-900 placeholder-gray-500 border-gray-200 h-12 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField 
                  control={form.control} 
                  name="message" 
                  render={({ field }) => (
                    <FormItem>
                        <FormLabel className="text-gray-900 font-semibold text-base">Viesti *</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Kerro lisätietoja yhteydenottosi liittyen" 
                            className="min-h-[140px] bg-gray-50 text-gray-900 placeholder-gray-500 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="privacy"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                            className="bg-gray-50 border-gray-200 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                          <FormLabel className="text-sm text-gray-700 leading-relaxed">
                          Lähettämällä tämän lomakkeen vakuutan, että antamani tiedot ovat oikeita. Lisäksi hyväksyn henkilötietojeni käsittelyn OmaVerkkoturvan{' '}
                            <a href="https://omaverkkoturva.fi/#/tietosuojaseloste" className="text-blue-600 hover:text-blue-700 underline font-medium" target="_blank" rel="noopener noreferrer">
                            tietosuojaselosteen
                          </a>{' '}
                          mukaisesti.
                        </FormLabel>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
                
                {/* Honeypot field */}
                <FormField 
                  control={form.control} 
                  name="honeypot" 
                  render={({ field }) => (
                    <FormItem className="hidden">
                      <FormControl>
                        <Input {...field} tabIndex={-1} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                
                {/* Hidden timestamp field */}
                <FormField 
                  control={form.control} 
                  name="timestamp" 
                  render={({ field }) => (
                    <FormItem className="hidden">
                      <FormControl>
                        <Input type="hidden" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                
                <button 
                  type="submit" 
                  disabled={isSubmitting} 
                    className="w-full text-white py-4 px-8 rounded-xl transition-all duration-300 font-semibold text-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    style={{
                      background: `linear-gradient(135deg, #1e2a5e 0%, #1e3a8a 100%)`
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Lähetetään...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Lähetä yhteydenotto</span>
                      </>
                    )}
                </button>
              </form>
            </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;