import { format } from "date-fns";

export default function Page() {
  let x = new Date();

  return (
    <div className="p-8">
      <p>{format(x, "MMM do h:mm a")}</p>
    </div>
  );
}
