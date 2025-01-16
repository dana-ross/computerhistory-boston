import Address from "./Address";

interface FullAddressProps {
    address : Address,
    className?: string
}

export default function FullAddress({address, className} : FullAddressProps) {
    className += " italic"
    return (
        <address className={className}>
            {address.street}<br />
            {address.city}, {address.state} {address.zip}
        </address>
    )
}