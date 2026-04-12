export const validators = {
   email: (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
   minLength: (value: string, min = 8) => value?.length >= min,
   required: (value: string) => value?.trim(),
}
