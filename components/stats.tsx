import { Briefcase, Users, CheckCircle, Clock } from 'lucide-react';

const stats = [
  { id: 1, name: 'Years Experience', value: '10+', icon: Briefcase },
  { id: 2, name: 'Projects Delivered', value: '50+', icon: CheckCircle },
  { id: 3, name: 'Teams Led', value: '15+', icon: Users },
  { id: 4, name: 'Avg. Delivery Time', value: '30% Faster', icon: Clock },
];

export default function Stats() {
  return (
    <section className="py-12 bg-muted/50">
      <div className="container">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.id} className="text-center">
              <div className="flex justify-center">
                <stat.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mt-4 text-3xl font-bold">{stat.value}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{stat.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
