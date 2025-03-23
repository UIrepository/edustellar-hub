
import * as React from "react";
import { cn } from "@/lib/utils";

interface CardCustomProps extends React.HTMLAttributes<HTMLDivElement> {
  glass?: boolean;
  hover?: boolean;
  clickable?: boolean;
  bordered?: boolean;
  elevated?: boolean;
  flat?: boolean;
}

const CardCustom = React.forwardRef<HTMLDivElement, CardCustomProps>(
  ({ className, glass = false, hover = false, clickable = false, bordered = true, elevated = false, flat = false, ...props }, ref) => {
    const baseStyles = "rounded-xl transition-all duration-300";
    
    const glassEffect = glass ? "glass-morphism backdrop-blur-lg" : "bg-card text-card-foreground";
    const hoverEffect = hover ? "hover:shadow-lg hover:-translate-y-1" : "";
    const clickableEffect = clickable ? "cursor-pointer active:scale-99" : "";
    const borderedEffect = bordered ? "border" : "";
    const elevatedEffect = elevated ? "shadow-md" : "";
    const flatEffect = flat ? "shadow-none" : "";
    
    return (
      <div
        ref={ref}
        className={cn(
          baseStyles,
          glassEffect,
          hoverEffect,
          clickableEffect,
          borderedEffect,
          elevatedEffect,
          flatEffect,
          className
        )}
        {...props}
      />
    );
  }
);

CardCustom.displayName = "CardCustom";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-xl font-semibold leading-tight tracking-tight",
      className
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export { CardCustom, CardHeader, CardTitle, CardDescription, CardContent, CardFooter };
