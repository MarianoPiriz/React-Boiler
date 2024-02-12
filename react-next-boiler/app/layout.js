import Navigation from '@/components/Navigation';
import { Roboto } from 'next/font/google';
export const metadata = {
  title: 'React Next.js Boiler Plate',
  description: 'Including THRE JS and Framer Motion ',
};

const ffRoboto = Roboto({
  weight: ['300', '400', '500'],
  styles: ['italic', 'normal'],
  subsets: ['latin'],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ffRoboto.className}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
