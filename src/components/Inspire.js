import { useRef } from "react"
import { InspireDataSource } from "./dataSource/inspire-data"

export default function Inspire() {
    const inspireDataRef = useRef(InspireDataSource());
    return (
        <section className="inspire-section">
            <h1 className="inspire-section-title">{"What makes us so good?"}</h1>
            <div className="inspiring-factors-grid-container">
                {inspireDataRef.current?.map((inspireFactorItem, inspireFactorIndex) => (
                    <div className="inspire-factor-card-content-wrapper" key={inspireFactorIndex}>
                        <span className="inspire-item-icon-wrapper">
                            <img src={inspireFactorItem?.icon} 
                                alt={inspireFactorItem?.title + "-icon"} 
                                className="inspire-icon" />
                        </span>
                        <div className="inspire-item-description-content-wrapper">
                            <h3 className="inspire-item-title">{inspireFactorItem?.title}</h3>
                            <p className="inspire-item-description">{inspireFactorItem?.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}