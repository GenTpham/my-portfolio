export default function Footer() {
  return (
    <footer className="w-full border-t border-border mt-24">
      <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Pham Trung Truc. All rights reserved.
        </div>
        <div className="text-sm text-muted-foreground">
          Built for production.
        </div>
      </div>
    </footer>
  );
}
