export default function getFormattedDate(dateString: string): string {
  return new Intl.DateTimeFormat(["ban", "id"], { dateStyle: "long" }).format(
    new Date(dateString)
  );
}
