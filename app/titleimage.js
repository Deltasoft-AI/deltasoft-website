import Image from 'next/image'

const contentful = require('contentful');

const client = contentful.createClient({
  space: '3qjuz81t9uk8',
  environment: 'master',
  accessToken: '3axwIpb57OdFfPKGRqUSwR8YA1NtVy88QH_6id3nejw'
});

client.getEntry('5MmmutDwVWDI1PwLamIJuQ')
.then((entry) => {
  const imageUrl = "https:" + entry.fields.mainImage.fields.file.url;
})
.catch(console.error);

export default function TitleImage() {
  return (
    <Image
      src="https://images.ctfassets.net/3qjuz81t9uk8/6CEbpmYITxXNWqMgCMeouz/5fc132506e836dee499c67a40e4663b9/mohammad-rahmani-_Fx34KeqIEw-unsplash.jpg"
      alt="image"
      width={300}
      height={100}
      priority
    />
  );
}
