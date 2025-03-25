import Sidebar from "@/components/sidebar";
import Card from "@/components/card";

export default function Home() {
  return (
    <div>
      <Sidebar />

      <div className="p-7 sm:ml-64">
        <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card
            title="Getting started"
            description="Ik heb geleerd hoe je een component aanmaakt en hergebruikt."
            status="Done"
            link="/gettingstarted"
          />

          <Card
            title="Next.js leren"
            description="Ik ben bezig met het leren van Next.js en hoe je pagina's aanmaakt."
            status="In Progress"
            link="/nextjs"
          />

          <Card
            title="API-koppeling maken"
            description="Dit onderdeel moet ik nog doen, maar ik weet al hoe ik moet beginnen."
            status="Not Started"
            link="/nextjs"
          />
        </div>
      </div>
    </div>
  );
}
