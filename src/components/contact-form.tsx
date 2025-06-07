"use client";

import { useTransition } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Send } from 'lucide-react';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres." }),
  email: z.string().email({ message: "Por favor, introduce un correo electrónico válido." }),
  message: z.string().min(10, { message: "El mensaje debe tener al menos 10 caracteres." }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export function ContactForm() {
  const { toast } = useToast();
  const [isSubmittingForm, startFormSubmissionTransition] = useTransition();

  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit: SubmitHandler<ContactFormValues> = async (data) => {
    startFormSubmissionTransition(async () => {
      try {
        const apiData = { ...data, inquiry: data.message }; 
        
        const response = await fetch('/api/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(apiData),
        });

        const result = await response.json();

        if (!response.ok) {
          throw new Error(result.message || 'Error desconocido al enviar tu consulta.');
        }

        toast({
          title: "¡Consulta Enviada!",
          description: result.message || "Gracias por tu mensaje. Me pondré en contacto contigo lo antes posible.",
        });
        reset();
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Hubo un problema al enviar tu consulta.";
        toast({
          title: "Error al Enviar",
          description: `${errorMessage} Por favor, inténtelo de nuevo más tarde.`,
          variant: "destructive",
        });
      }
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="name" className="font-medium">Nombre</Label>
          <Input id="name" {...register("name")} placeholder="Tu nombre completo" className="mt-1" aria-invalid={!!errors.name} />
          {errors.name && <p className="text-sm text-destructive mt-1">{errors.name.message}</p>}
        </div>
        <div>
          <Label htmlFor="email" className="font-medium">Correo Electrónico</Label>
          <Input id="email" type="email" {...register("email")} placeholder="tu@ejemplo.com" className="mt-1" aria-invalid={!!errors.email} />
          {errors.email && <p className="text-sm text-destructive mt-1">{errors.email.message}</p>}
        </div>
      </div>
      <div>
        <Label htmlFor="message" className="font-medium">Describe tu problema o consulta</Label>
        <Textarea
          id="message"
          {...register("message")}
          placeholder="Describe el problema que estás experimentando con tu equipo o cualquier otra consulta técnica que tengas..."
          rows={6}
          className="mt-1"
          aria-invalid={!!errors.message}
        />
        {errors.message && <p className="text-sm text-destructive mt-1">{errors.message.message}</p>}
      </div>

      <div>
        <Button type="submit" className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground shadow-md hover:shadow-lg transition-all" disabled={isSubmittingForm}>
          {isSubmittingForm ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Send className="mr-2 h-4 w-4" />
          )}
          Enviar Consulta
        </Button>
      </div>
    </form>
  );
}
