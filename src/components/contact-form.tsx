"use client";

import { useState, useTransition } from 'react';
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
  phone: z.string().optional().refine(val => !val || /^[+]?[0-9\s-()]*$/.test(val), { message: "Número de teléfono inválido." }),
  inquiry: z.string().min(10, { message: "La consulta debe tener al menos 10 caracteres." }),
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
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        console.log("Form data submitted:", data);
        toast({
          title: "¡Mensaje Enviado!",
          description: "Gracias por contactar con Alhaurín Tech Solutions. Le responderemos lo antes posible.",
        });
        reset();
      } catch (error) {
        toast({
          title: "Error al Enviar",
          description: "Hubo un problema al enviar su mensaje. Por favor, inténtelo de nuevo.",
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
          <Input id="name" {...register("name")} placeholder="Su nombre completo" className="mt-1" aria-invalid={!!errors.name} />
          {errors.name && <p className="text-sm text-destructive mt-1">{errors.name.message}</p>}
        </div>
        <div>
          <Label htmlFor="email" className="font-medium">Correo Electrónico</Label>
          <Input id="email" type="email" {...register("email")} placeholder="su@ejemplo.com" className="mt-1" aria-invalid={!!errors.email} />
          {errors.email && <p className="text-sm text-destructive mt-1">{errors.email.message}</p>}
        </div>
      </div>
      <div>
        <Label htmlFor="phone" className="font-medium">Teléfono (Opcional)</Label>
        <Input id="phone" type="tel" {...register("phone")} placeholder="Su número de teléfono" className="mt-1" aria-invalid={!!errors.phone}/>
        {errors.phone && <p className="text-sm text-destructive mt-1">{errors.phone.message}</p>}
      </div>
      <div>
        <Label htmlFor="inquiry" className="font-medium">Su Consulta</Label>
        <Textarea
          id="inquiry"
          {...register("inquiry")}
          placeholder="Describa su problema o consulta aquí..."
          rows={5}
          className="mt-1"
          aria-invalid={!!errors.inquiry}
        />
        {errors.inquiry && <p className="text-sm text-destructive mt-1">{errors.inquiry.message}</p>}
      </div>

      <div>
        <Button type="submit" className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground shadow-md hover:shadow-lg transition-all" disabled={isSubmittingForm}>
          {isSubmittingForm ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Send className="mr-2 h-4 w-4" />
          )}
          Enviar Mensaje
        </Button>
      </div>
    </form>
  );
}
