//This is the Projects page component for the portfolio

export default function Projects() {
    const projects = [
  { title: 'Quranly', link: '#', description: 'Helps user track their memorization of the holy Quran' },
  { title: 'Boom', link: 'boom-kohl.vercel.app', description: 'Lets users record, and upload movie clips and get the movie name.' },
  { title: 'JibolaReel', link: '#', description: `Lets users to search for a movie and see it's related movies` },
  { title: 'AbuadBlog', link: '#', description: `Allows Abuad students to post tyhe hottest gist in the school` }
];
  return (
    <section className="p-8">
      <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <div key={index} className="p-4 border rounded-lg shadow">
            <h3 className="text-xl font-semibold text-blue-700">{project.title}</h3>
            <p className="text-gray-600">{project.description}</p>
            <a href={project.link} className="text-blue-500 underline mt-2 inline-block">View Demo</a>
          </div>
        ))}
      </div>
    </section>
  );
}