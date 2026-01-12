"use client";

import { motion } from "framer-motion";
import {
  CheckCircle,
  Copy,
  ExternalLink,
  Github,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/lib/data/personal";
import { getContactSocials } from "@/lib/data/socials";

export function Contact() {
  const socialLinks = getContactSocials();
  const githubLink = socialLinks.find((s) => s.id === "github");
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopiedEmail(true);
      toast.success("Email copied to clipboard!");
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      toast.error("Failed to copy email");
    }
  };

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get In <span className="text-gradient-primary">Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Have a project in mind or want to collaborate? I'd love to hear
              from you. Let's create something amazing together.
            </p>
          </div>
        </FadeIn>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-12">
            {/* Contact Information */}
            <FadeIn delay={0.2}>
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
                  <p className="text-muted-foreground mb-8">
                    I'm always interested in new opportunities, collaborations,
                    and interesting projects. Feel free to reach out!
                  </p>
                </div>

                {/* Contact Details */}
                <div className="space-y-6">
                  <ContactDetail
                    icon={Mail}
                    label="Email"
                    value={personalInfo.email}
                    action={copyEmail}
                    actionIcon={copiedEmail ? CheckCircle : Copy}
                    actionLabel={copiedEmail ? "Copied!" : "Copy"}
                  />

                  <ContactDetail
                    icon={MapPin}
                    label="Location"
                    value={personalInfo.location}
                  />

                  {personalInfo.phone && (
                    <ContactDetail
                      icon={Phone}
                      label="Phone"
                      value={personalInfo.phone}
                    />
                  )}
                </div>

                {/* Social Links */}
                {/* <div>
                  <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
                  <div className="flex flex-wrap gap-4">
                    {socialLinks.map(({ id, href, icon: Icon, label }) => (
                      <motion.a
                        key={id}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-lg bg-muted/50 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-200"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Icon className="w-5 h-5" />
                        <span className="sr-only">{label}</span>
                      </motion.a>
                    ))}
                  </div>
                </div> */}

                {/* Quick Actions */}
                {/* <div className="space-y-4">
                  <h4 className="text-lg font-semibold">Quick Actions</h4>
                  <div className="flex flex-wrap gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        window.open(personalInfo.resumeUrl, "_blank")
                      }
                      className="flex items-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Resume
                    </Button>
                    {githubLink && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() =>
                          window.open(githubLink.href, "_blank")
                        }
                        className="flex items-center gap-2"
                      >
                        <Github className="w-4 h-4" />
                        GitHub Profile
                      </Button>
                    )}
                  </div>
                </div> */}
              </div>
            </FadeIn>

            {/* Contact Form: TODO */}
            {/* <FadeIn delay={0.4}>
              <ContactForm />
            </FadeIn> */}
          </div>
        </div>
      </div>
    </section>
  );
}

interface ContactDetailProps {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  action?: () => void;
  actionIcon?: React.ComponentType<{ className?: string }>;
  actionLabel?: string;
}

function ContactDetail({
  icon: Icon,
  label,
  value,
  action,
  actionIcon: ActionIcon,
  actionLabel,
}: ContactDetailProps) {
  return (
    <motion.div
      className="flex items-center justify-between p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
      whileHover={{ x: 4 }}
    >
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-lg bg-primary/10">
          <Icon className="w-5 h-5 text-primary" />
        </div>
        <div>
          <p className="text-sm text-muted-foreground">{label}</p>
          <p className="font-medium">{value}</p>
        </div>
      </div>

      {action && ActionIcon && actionLabel && (
        <Button
          variant="ghost"
          size="sm"
          onClick={action}
          className="text-muted-foreground hover:text-foreground"
        >
          <ActionIcon className="w-4 h-4 mr-1" />
          {actionLabel}
        </Button>
      )}
    </motion.div>
  );
}
