// import Link from "next/link";
import classes from "./event-item.module.css";
import Button from "./ui/button";
import calendarIcon from "./Icons/CalendarIcon";
import AddressIcon from "./Icons/AddressIcon";
import RightIcon from "./Icons/RightIcon";


function EventItem(props) {
    const {title,image,date,location,id}=props;
    const humanReadableDate=new Date(date).toLocaleDateString('en-US',{
        day:'numeric',
        month:'long',
        year:'numeric'
    })

    const formattedAddress=location.replace(',',' ');
    const exploreLink=`/events/${id}`;

  return (
    <li className={classes.item}>
      <img src={"/"+image} alt={title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <calendarIcon />
            <time>{humanReadableDate}</time>  
          </div>
          <div className={classes.address}>
            <AddressIcon/>
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
           {/* < <Link href={exploreLink}>Explore Event</Link>> */}
           
           <Button link={exploreLink}>
            <span>Explore Event</span>
            <span><rightIcon/></span></Button>
        </div>
      </div>
    </li>
  );
}
export default EventItem;
