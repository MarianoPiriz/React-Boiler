import fromForm from '@/components/Form';

export default function ContactPage() {
    //fromForm("#contactForm");
  return (
    <div>
      <h1>CONTACT</h1>
      <div>
        <form action="" id='contactForm'>
            <h4>Name</h4>
          <input type="input" name="name" placeholder="John Doe" required/>
          <h4>Email</h4>
          <input type="email" name="email" placeholder="name@example.com" required />
          <h4>Phone Number</h4>
          <input type="text" name="phone" placeholder="xxxxxx" required/>
          <h4>Message</h4>
          <textarea type="text" name="message" placeholder="Write Something" required/>
          <button type="submit">SEND</button>
        </form>
      </div>
    </div>
  );
}
