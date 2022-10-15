import { useRef } from "react"
import { CommunityPartnersDataSource } from "./dataSource/community-partners-data"

export default function CommunityPartners() {
    const communityPartnersDataRef = useRef(CommunityPartnersDataSource());
    return (
        <section className="community-partners-section">
            <p className="community-partners-section-title">
                Shoutout to our <b>Community Partners</b> for thier invaluable support
            </p>
            <div className="community-partners-grid-container">
                {communityPartnersDataRef.current?.map((communityPartner, communityPartnerIndex) => (
                    <div className="community-partner-logo-wrapper" key={communityPartnerIndex}>
                        <img src={communityPartner?.logo} 
                            alt={communityPartner?.name.toLowerCase() + "-logo"} 
                            className="community-partner-logo" />
                    </div>
                ))}
            </div>
        </section>
    )
}