import React from "react";
import Portal from "./Portal";
import { X } from "lucide-react";

const Header = ({ children }: { children: React.ReactNode }) => (
  <h1>{children}</h1>
);

const Body = ({ children }: { children: React.ReactNode }) => (
  <div>{children}</div>
);

export default function Modal({
  children,
  isShowing,
  toggle,
}: {
  children: React.ReactNode;
  isShowing: boolean;
  toggle: () => void;
}) {
  let _header, _body;

  React.Children.forEach(children, (child: any) => {
    if (child.type == Header) {
      return (_header = child);
    }
    if (child.type == Body) {
      return (_body = child);
    }
  });

  return (
    <Portal>
      <div
        className={`fixed z-[1040] ${
          !isShowing && "hidden"
        } inset-0 z-[1050] h-full w-screen flex justify-center items-center`}
      >
        <div className="fixed inset-0 bg-black/50" onClick={toggle} />
        {/* <div className="fixed inset-0 z-[1050] h-full w-screen flex justify-center items-center"> */}
        <div className="z-[100] bg-white transition-[all_300ms_cubic-bezier(0.075, 0.82, 0.165, 1)_0s] relative rounded-lg transform-none m-auto max-h-[693px] h-[80%] w-[80%] min-w-[100px] overflow-hidden dark:bg-background">
          <div className="border-b h-16 flex justify-between items-center px-4">
            <div>{_header}</div>
            <div
              onClick={toggle}
              className="cursor-pointer flex items-center justify-center z-[1] rounded-[50%] bg-black/10 w-[34px] h-[34px] dark:bg-white/10"
            >
              <X className="w-[25px] h-[25px]" />
            </div>
          </div>
          {_body}
        </div>
      </div>
      {/* </div> */}
    </Portal>
  );
}

Modal.Header = Header;
Modal.Body = Body;
