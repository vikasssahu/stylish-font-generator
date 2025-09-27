"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface AnimatedTabProps {
  value: string
  label: string
  selected: boolean
  onSelect?: (value: string) => void
  badge?: {
    text: string
    variant?: "default" | "secondary" | "destructive" | "outline"
    className?: string
  }
  icon?: React.ReactNode
  className?: string
}

export function AnimatedTab({
  value,
  label,
  selected,
  onSelect,
  badge,
  icon,
  className,
}: AnimatedTabProps) {
  return (
    <button
      onClick={() => onSelect?.(value)}
      className={cn(
        "relative w-fit pl-4 pr-2 py-2 text-sm font-semibold transition-all duration-300 ease-out",
        selected
          ? "text-foreground"
          : "text-muted-foreground hover:text-foreground/80",
        badge && "flex items-center justify-center gap-2.5",
        className
      )}
    >
      <span className="relative z-10 flex items-center gap-2 transition-transform duration-300">
        {icon}
        {label}
      </span>
      {selected && (
        <motion.span
          layoutId="animated-tab"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 25,
            mass: 0.8,
          }}
          className="absolute inset-0 z-0 rounded-full bg-background shadow-[0_2px_15px] shadow-black/5 backdrop-blur-sm"
        />
      )}
      {badge && (
        <Badge
          variant={badge.variant || "outline"}
          className={cn(
            "border-0 z-10 text-[10px] h-5 px-1.5 font-bold transition-all duration-300",
            badge.className
          )}
        >
          {badge.text}
        </Badge>
      )}
    </button>
  )
}

interface AnimatedTabsProps {
  options: Array<{
    value: string
    label: string
    badge?: {
      text: string
      variant?: "default" | "secondary" | "destructive" | "outline"
      className?: string
    }
    icon?: React.ReactNode
  }>
  value?: string
  onValueChange?: (value: string) => void
  defaultValue?: string
  className?: string
  containerClassName?: string
}

export function AnimatedTabs({
  options,
  value,
  onValueChange,
  defaultValue,
  className,
  containerClassName
}: AnimatedTabsProps) {
  const [selectedValue, setSelectedValue] = React.useState<string>(
    value || defaultValue || options[0]?.value || ""
  )

  const handleValueChange = React.useCallback((newValue: string) => {
    setSelectedValue(newValue)
    onValueChange?.(newValue)
  }, [onValueChange])

  // Sync with external value changes
  React.useEffect(() => {
    if (value !== undefined) {
      setSelectedValue(value)
    }
  }, [value])

  return (
      <div
          className={cn(
              "flex w-fit items-center rounded-full p-1 bg-muted backdrop-blur-sm justify-center mx-auto",
              containerClassName
          )}>
          {options.map((option) => (
              <AnimatedTab
                  key={option.value}
                  value={option.value}
                  label={option.label}
                  selected={selectedValue === option.value}
                  onSelect={handleValueChange}
                  badge={option.badge}
                  icon={option.icon}
                  className={className}
              />
          ))}
      </div>
  );
}