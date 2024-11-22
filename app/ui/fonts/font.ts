// next 框架默认集成了 @next/font
import { Inter, Lusitana } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });

export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});