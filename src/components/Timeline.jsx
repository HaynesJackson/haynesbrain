import TimelineItem from "./TimelineItem";

function Timeline({ events }) {
    return (
        <div className="max-w-xl z-20 mx-auto pl-3 pr-3 py-12">
            {events.map((event, i) => {
                let isEven = i % 2 === 0;
                return (
                    <TimelineItem key={i} side = {isEven ? 'l' : 'r'} month={event.month} year={event.year} title={event.title} description={event.description} />
                )})}
        </div>
    );
}

export default Timeline;