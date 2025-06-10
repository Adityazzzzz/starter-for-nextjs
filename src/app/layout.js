export const metadata = {
  title: "adityazzzzDB",
  description: "Your Personal DataBase",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className={"bg-[#FAFAFB] font-[Inter] text-sm text-[#56565C]"}>
        {children}
      </body>
    </html>
  );
}
