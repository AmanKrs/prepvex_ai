import React from "react";
import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <nav
      className="fixed top-0 inset-x-0 z-50 flex h-16 w-full items-center 
    justify-between border-b bg-background px-10 py-3 border-white/7 backdrop-blur-xl"
    >
      PrepVex AI
      <div className="flex items-center gap-4">
        <Show when="signed-out">
          <SignInButton mode="modal">
            <Button className="cursor-pointer">Sign In</Button>
          </SignInButton>

          <SignUpButton mode="modal">
            <Button className="cursor-pointer">Sign Up</Button>
          </SignUpButton>
        </Show>
        <Show when="signed-in">
          <UserButton />
        </Show>
      </div>
    </nav>
  );
};

export default Header;
