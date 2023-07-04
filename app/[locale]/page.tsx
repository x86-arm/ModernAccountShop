"use client";

import Modal from "@/components/Modal";
import { Button } from "@/components/ui/button";
import useModal from "@/hooks/useModal";
import Link from "next/link";
import Typography from "@/components/ui/typography";
import { ChevronRight } from "lucide-react";

export default function Home() {
  const { isShowing, toggle } = useModal();
  return (
    <main className="flex-1">
      <div className="w-full mx-auto px-8 relative">
        <section className="flex max-w-[980px] flex-col items-start gap-2 px-4 pt-8 md:pt-12 pb-8">
          <Link
            href="#"
            className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium"
          >
            🎉 <div className="shrink-0 bg-border w-[1px] mx-2 h-4" /> Nạp không
            giới hạn. <ChevronRight className="ml-1 w-4 h-4" />
          </Link>
          <Typography variant="h1">Modern account shop</Typography>
          <Typography variant="h4" size="muted" className="font-normal">
            Beautifully designed components that you can copy and paste into
            your apps. Accessible. Customizable. Open Source.
          </Typography>
        </section>
        <Modal isShowing={isShowing} toggle={toggle}>
          <Modal.Header>Modal</Modal.Header>
          <Modal.Body>
            <Typography variant={"h1"} component="h3">
              aa
            </Typography>
          </Modal.Body>
        </Modal>
        <Button variant="outline" onClick={() => toggle()}>
          Open Modal
        </Button>
      </div>
    </main>
  );
}
