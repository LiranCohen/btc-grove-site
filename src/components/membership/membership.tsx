import React from 'react';
import './membership.scss';

interface Props {
    className?: string;
}

interface MembershipTierProps {
  title: string;
  description: string;
  bullets: string[];
  price: number;
}

const MembershipTier: React.FC<MembershipTierProps> = ({ title, description, bullets, price }) => {
    return (
        <div className="membership-tier">
            <h4 className="membership-tier__title">{title}</h4>
            <p className="membership-tier__description">{description}</p>
            <h5 className="membership-tier__benefits">Benefits</h5>
            <ol className="membership-tier__list">
                {bullets.map(b => <li key={b} className="membership-tier__list-item">{b}</li>)}
            </ol>
            <h5 className="membership-tier__price">
                <span>${price}<small>/mo</small></span>
            </h5>
        </div>
    );
};

const Membership: React.FC<Props> = ({ className }) => {
    return (
        <div className={`membership ${className}`}>
            <h3 className="membership__title">Membership Tiers</h3>
            <div className="membership__tiers">
                <MembershipTier 
                    title="Resident"
                    description="As a Resident Member, you'll enjoy full access to our hackerspace, including exclusive events, workshops, and networking opportunities. You'll also have the chance to collaborate with like-minded individuals and industry leaders."
                    bullets={[
                        "Full access to the hackerspace",
                        "Invitations to exclusive events and workshops",
                        "Networking opportunities with Bitcoin enthusiasts and experts",
                        "Collaborative environment to work on Bitcoin project",
                    ]}
                    price={300}
                />
                <MembershipTier 
                    title="Nomad"
                    description="Perfect for those who need a flexible arrangement, our Nomad membership offers access to our hackerspace on a per-visit basis. You'll still enjoy the benefits of our community, events, and workshops, but with the flexibility to come and go as you please."
                    bullets={[
                        "Pay-per-visit access to the hackerspace",
                        "Access to community events and workshops",
                        "Networking opportunities with Bitcoin enthusiasts and experts",
                        "Flexibility to suit your schedule",
                    ]}
                    price={180}
                />
            </div>
        </div>
    );
};

export default Membership;