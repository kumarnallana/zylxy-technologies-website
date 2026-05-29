import { ANNOUNCEMENT_DATA } from "@/data/navigationData";
import { announcementStyles } from "@/styles/navbar/navbar.dark";

export default function AnnouncementBar() {
  return (
    <div className={announcementStyles.barWrapper}>
      <div className={announcementStyles.locationGroup}>
        <div className={announcementStyles.statusDot} />
        <span className={announcementStyles.locationText}>
          {ANNOUNCEMENT_DATA.location}
        </span>
      </div>
      <div className={announcementStyles.contactGroup}>
        {ANNOUNCEMENT_DATA.contacts.map((contact) => (
          <span key={contact} className={announcementStyles.contactLink}>
            {contact}
          </span>
        ))}
      </div>
    </div>
  );
}
