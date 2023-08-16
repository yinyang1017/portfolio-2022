import MyInfo from "../MyInfo";

export default function Location() {
  return (
    <div className="p-12">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14768.425492730841!2d114.17193326289814!3d22.27396003193664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3404004c435d4ad9%3A0x6e0e524894ae1a66!2sWan%20Chai%20District%2C%20Hong%20Kong!5e0!3m2!1sen!2sus!4v1692202020171!5m2!1sen!2sus"
        style={{ border: 0 } as React.CSSProperties}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-96"
      ></iframe>
      <ul className="grid grid-cols-1 mt-10 location sm:grid-cols-2 gap-y-2">
        <MyInfo field="address" value="Wan Chai, Hong Kong" />
        <MyInfo field="email" value="keaideren.star@gmail.com" />
        <MyInfo field="phone" value="(+1)613 768 0222" />
        <MyInfo field="freelance" value="Available" />
      </ul>
    </div>
  );
}
