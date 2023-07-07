import Link from "next/link";
import Typography from "@/components/ui/typography";
import { ChevronRight } from "lucide-react";
import RechargeRanking from "@/components/RechargeRanking";
import AccountCategory from "@/components/AccountCategory";

const RovItems = [
  {
    title: "Vip accounts",
    description: "abc",
    img: "",
    path: "#",
  },
  {
    title: "Vip accounts",
    description: "abc",
    img: "",
    path: "#",
  },
  {
    title: "Vip accounts",
    description: "abc",
    img: "",
    path: "#",
  },
  {
    title: "Vip accounts",
    description: "abc",
    img: "",
    path: "#",
  },
  {
    title: "Vip accounts",
    description: "abc",
    img: "",
    path: "#",
  },
  {
    title: "Vip accounts",
    description: "abc",
    img: "",
    path: "#",
  },
  {
    title: "Vip accounts",
    description: "abc",
    img: "",
    path: "#",
  },
  {
    title: "Vip accounts",
    description: "abc",
    img: "",
    path: "#",
  },
];

export default function Home() {
  return (
    <main className="flex-1 flex justify-center">
      <div className="px-8 relative max-w-[1524px]">
        <section className="flex px-4 pt-8 md:pt-12 pb-8 flex-col md:flex-row gap-5 justify-center">
          <div className="flex flex-col items-start gap-2">
            <Link
              href="#"
              className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium"
            >
              🎉 <div className="shrink-0 bg-border w-[1px] mx-2 h-4" /> Nạp
              không giới hạn. <ChevronRight className="ml-1 w-4 h-4" />
            </Link>
            <Typography variant="h1">Modern account shop</Typography>
            <Typography
              variant="h4"
              size="muted"
              component="span"
              className="font-normal"
            >
              Beautifully designed components that you can copy and paste into
              your apps. Accessible. Customizable. Open Source.
            </Typography>
          </div>
          <RechargeRanking />
        </section>
        <AccountCategory title="Aov Accounts" items={RovItems} />
      </div>
    </main>
  );
}
