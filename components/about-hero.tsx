export default function AboutHero() {
  return (
    <section className="py-12 md:py-16">
      <div className="container grid items-center gap-8 px-4 md:px-6 lg:grid-cols-2">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            About Me
          </h1>
          <p className="text-lg text-muted-foreground">
            I'm Vinothkumar Mani, an Agile Delivery Manager with a passion for 
            building high-performing teams and delivering exceptional digital products.
          </p>
          <div className="prose max-w-none text-muted-foreground">
            <p>
              With over a decade of experience in the tech industry, I specialize in 
              bridging the gap between business objectives and technical execution. 
              My approach combines agile methodologies with practical leadership to 
              drive successful project outcomes.
            </p>
            <p>
              Outside of work, I'm an avid learner and enjoy contributing to open-source 
              projects, mentoring junior developers, and exploring new technologies.
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="h-64 w-64 rounded-full bg-gradient-to-r from-primary to-secondary p-1">
            <div className="h-full w-full rounded-full bg-background overflow-hidden">
              {/* Replace with actual image */}
              <div className="h-full w-full bg-muted flex items-center justify-center">
                <span className="text-muted-foreground">Profile Photo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
