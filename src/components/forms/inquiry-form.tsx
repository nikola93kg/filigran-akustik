import { useForm } from '@formspree/react';
import { useForm as useHookForm } from 'react-hook-form';
import { cn } from '../../lib/cn';

interface FormValues {
  ime: string;
  kontakt: string;
  tipDogadjaja: string;
  datum: string;
  lokacija: string;
  poruka: string;
}

const eventTypes = [
  'Venčanje',
  'Privatna proslava',
  'Korporativni event',
  'Svečana večera',
  'Ostalo',
];

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

function Field({ label, error, className, ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[#8898A8] text-xs tracking-widest uppercase">{label}</label>
      <input
        {...props}
        className={cn(
          'bg-transparent border-b border-[#D0A030]/20 py-3 text-[#F0EAD8] text-sm placeholder:text-[#8898A8]/40 focus:outline-none focus:border-[#D0A030] transition-colors duration-300',
          error && 'border-red-500/60',
          className
        )}
      />
      {error && <p className="text-red-400 text-xs">{error}</p>}
    </div>
  );
}

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

function TextareaField({ label, error, className, ...props }: TextareaProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[#8898A8] text-xs tracking-widest uppercase">{label}</label>
      <textarea
        {...props}
        rows={4}
        className={cn(
          'bg-transparent border-b border-[#D0A030]/20 py-3 text-[#F0EAD8] text-sm placeholder:text-[#8898A8]/40 focus:outline-none focus:border-[#D0A030] transition-colors duration-300 resize-none',
          error && 'border-red-500/60',
          className
        )}
      />
      {error && <p className="text-red-400 text-xs">{error}</p>}
    </div>
  );
}

export function InquiryForm() {
  const [formspreeState, formspreeSubmit] = useForm(
    import.meta.env.VITE_FORMSPREE_ID ?? 'placeholder'
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useHookForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    formspreeSubmit(data as unknown as React.FormEvent<HTMLFormElement>);
  };

  if (formspreeState.succeeded) {
    return (
      <div className="flex flex-col items-center gap-4 py-16 text-center">
        <div className="w-12 h-px bg-[#D0A030]" />
        <h3 className="text-[#F0EAD8] text-2xl font-serif">Upit primljen</h3>
        <p className="text-[#8898A8] text-sm max-w-sm">
          Hvala vam! Javićemo vam se u roku od 24 sata.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <Field
          label="Vaše ime *"
          placeholder="Ime i prezime"
          error={errors.ime?.message}
          {...register('ime', { required: 'Ime je obavezno' })}
        />
        <Field
          label="Kontakt *"
          placeholder="E-mail ili telefon"
          error={errors.kontakt?.message}
          {...register('kontakt', { required: 'Kontakt je obavezan' })}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="flex flex-col gap-1.5">
          <label className="text-[#8898A8] text-xs tracking-widest uppercase">
            Tip događaja
          </label>
          <select
            {...register('tipDogadjaja')}
            className="bg-transparent border-b border-[#D0A030]/20 py-3 text-[#F0EAD8] text-sm focus:outline-none focus:border-[#D0A030] transition-colors duration-300 cursor-pointer"
          >
            <option value="" className="bg-[#001020]">
              Izaberite...
            </option>
            {eventTypes.map((t) => (
              <option key={t} value={t} className="bg-[#001020]">
                {t}
              </option>
            ))}
          </select>
        </div>

        <Field
          label="Datum"
          type="date"
          {...register('datum')}
          className="[color-scheme:dark]"
        />
      </div>

      <Field
        label="Lokacija"
        placeholder="Grad, objekat..."
        {...register('lokacija')}
      />

      <TextareaField
        label="Poruka"
        placeholder="Kratki opis događaja, broj gostiju, posebni zahtevi..."
        {...register('poruka')}
      />

      {formspreeState.errors && (
        <p className="text-red-400 text-sm">
          Greška pri slanju. Pokušajte ponovo ili nas kontaktirajte direktno.
        </p>
      )}

      <button
        type="submit"
        disabled={formspreeState.submitting}
        className="self-start inline-flex items-center justify-center px-8 py-3 bg-[#D0A030] text-[#000010] font-medium tracking-widest uppercase text-sm transition-all duration-300 hover:bg-[#E8C050] disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D0A030]"
      >
        {formspreeState.submitting ? 'Slanje...' : 'Pošalji upit'}
      </button>
    </form>
  );
}
