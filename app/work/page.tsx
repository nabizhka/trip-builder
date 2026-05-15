import WorkGrid from '@/components/WorkGrid';

export const metadata = { title: 'Work — wuhei·hei' };

export default function WorkPage() {
  return (
    <section className="route route-work">
      <div className="work-header">
        <div className="folio">
          <span>work · selected projects</span>
          <span>02 / 05</span>
        </div>
        <h1 className="display">
          <em>Selected</em><br />works
        </h1>
        <p className="lede">Animation, illustration, concept art, and pixel worlds.</p>
      </div>
      <WorkGrid />
    </section>
  );
}
