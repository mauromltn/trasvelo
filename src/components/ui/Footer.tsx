import { footerLinks } from "@/data/footerLinks"
import { Instagram, MessageCircle, Youtube } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="flex flex-col gap-5 p-5 sm:p-10 bg-neutral-900 text-white border-5 md:border-15 border-t-0 rounded-b-[35]">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Brand and description - takes full width on mobile, 1/4 on large screens */}
        <div className="flex flex-col gap-5 lg:col-span-2">
          <span className="text-3xl sm:text-4xl font-medium">trasvelo</span>
          <p className="w-85 text-sm">
            Experience personalized healthcare from the comfort of your home with our advanced telemedicine services.
          </p>

          <div className="flex gap-4 mt-2">
            <Link
              href="https://wa.me/trasvelo"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-neutral-800 rounded-full hover:bg-neutral-700 transition-colors"
            >
              <MessageCircle size={20} className="text-white" />
              <span className="sr-only">WhatsApp</span>
            </Link>
            <Link
              href="https://www.instagram.com/trasvelo/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-neutral-800 rounded-full hover:bg-neutral-700 transition-colors"
            >
              <Instagram size={20} className="text-white" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              href="https://www.youtube.com/channel/trasvelo"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-neutral-800 rounded-full hover:bg-neutral-700 transition-colors"
            >
              <Youtube size={20} className="text-white" />
              <span className="sr-only">YouTube</span>
            </Link>
          </div>
        </div>

        {/* Footer links - takes full width on mobile, 3/4 on large screens */}
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-0">
            {footerLinks.map((section, idx) => (
              <div key={idx}>
                <h3 className="text-white font-semibold mb-4 sm:mb-6">{section.title}</h3>
                <ul className="space-y-2 sm:space-y-3">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <Link href="#" className="text-gray-400 hover:text-white transition">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <hr className="w-full h-px bg-white/20 my-5" />

      <div className="pb-2">
        <p className="text-sm text-center sm:text-left">
          &copy; {new Date().getFullYear()} Trasvelo. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
