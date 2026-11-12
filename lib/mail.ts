/** mailto zonder spatie vóór het adres. Onderwerp en body via encodeURIComponent. */
export function mailtoHref(email: string, subject: string, body: string) {
  return `mailto:${email.trim()}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
