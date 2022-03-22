import Address from "./Address";

interface FullAddressProps {
    address : Address
}

export default function FullAddress({address } : FullAddressProps) {
    return (
        <address>
            {address.street}<br />
            {address.city}, {address.state} {address.zip}
        </address>
    )
}