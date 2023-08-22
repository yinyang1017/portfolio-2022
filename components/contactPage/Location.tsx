import { useContext } from "react";
import MyInfo from "../MyInfo";
import { AddressContext } from "../../context/address";

export default function Location() {
  const { address } = useContext(AddressContext);
  return (
    <div className="p-12">
      <iframe
        src={address.map}
        style={{ border: 0 } as React.CSSProperties}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-96"
      ></iframe>
      <ul className="grid grid-cols-1 mt-10 location sm:grid-cols-2 gap-y-2">
        <MyInfo field="address" value={address.address} />
        <MyInfo field="email" value={address.email} />
        <MyInfo field="phone" value={address.phone} />
        <MyInfo field="freelance" value={address.job} />
      </ul>
    </div>
  );
}
