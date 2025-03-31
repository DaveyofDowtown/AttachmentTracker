export function useToast() {
  return { toast: (msg: string) => console.log(msg) };
}