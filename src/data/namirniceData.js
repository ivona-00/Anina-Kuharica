const namirnice = [
  {
    id:0,
    naziv: 'Maslac',
    img:"https://d17zv3ray5yxvp.cloudfront.net/variants/P81W12wPtd36AcjEZQ19SGog/51b8aa181ad15015651703a4356668224748770ff8b1ba318f5b3051f549af07",
    brand:"Lactose free zone"
  },
  {
    id:1,
    naziv: 'Tamna Čokolada',
    img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fnajcijena.hr%2F_next%2Fimage%3Furl%3Dhttps%3A%2F%2Fcdn.najcijena.hr%2Fimages%2F6a69bf51-e2be-433e-8107-3373ea431613.jpg%26w%3D828%26q%3D75&f=1&nofb=1&ipt=42c8ad633c4f5d46d6680e41115eb271054af752658be97f3c5000ab4cab0a00",
    brand:"Valor"
  },
  {
    id:2,
    naziv: 'Kakao prah za pečenje',
    img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fapi.cjenoteka.hr%2Fuploads%2Fcache%2Fproduct_large%2Fuploads%2F2025%2F07%2Fdr-oetker-kakao-za-kolace-70g-686f7d0d93436.jpeg&f=1&nofb=1&ipt=55d3c67bf250fb150320487afef6cd9e608c6d15a4627c2be1e7c13e65d6775c",
    brand:"Dr.Oetker"
  },
  {
    id:3,
    naziv: 'Glatko Brašno',
    img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%2Fid%2FOIP.q-YRd1O_q1h0bOU3npfWJgHaHa%3Fpid%3DApi&f=1&ipt=87de63095a223062929f2eb380b20a50cb1103ce9d74c5c91538f4abefcdaa64",
    brand:"N/A"
  },
  {
    id:4,
    naziv: 'Šećer',
    img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Famadel.ba%2Fwp-content%2Fuploads%2F2022%2F06%2Fseeragragold5kg_Mala-700x700.jpg&f=1&nofb=1&ipt=f178a90cf92e65886f4cab1aefff292ae6eb98f8ce83f93aa56b1a94728bebf7",
    brand:"N/A"
  },
  {
    id:5,
    naziv: 'Jaja',
    img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F62%2F24%2Fe6%2F6224e6fbfa1bd192938e0d816ec459dd.jpg%3Fnii%3Dt&f=1&nofb=1&ipt=874a6c4501b0b00fce5947bb402e844e222a3d50f1ddc1f53dc94f999d93d798",
    brand:"N/A"
  },
  {
    id:6,
    naziv: 'Prašak za pecivo',
    img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fhercules.rs%2Ffajlovi%2Fproduct%2Fprasak-za-pecivo-dr-oetker-12g.jpg%3Fsize%3Dmd&f=1&nofb=1&ipt=d3f6bc6192b28a684ead5e32effa6999ac76dd6c4a6b1ce60a7c6d364636b556",
    brand:"N/A"
  },
  {
    id:7,
    naziv:'Grčki jogurt',
    img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fkravicakraljica.hr%2Fwp-content%2Fuploads%2Fkravica-kraljica-belje-grcki-jogurt-natur.png&f=1&nofb=1&ipt=cbb44c9da6765ba275412bb0901a65ac266d8d18e32f3c82f6d56f2b364e21bf",
    brand:"Kravica Kraljica"
  },
  {
    id:8,
    naziv:'Šlag',
    img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fnajcijena.hr%2F_next%2Fimage%3Furl%3Dhttps%3A%252F%252F6a563d03d7114bf1969e452682.nbg1.your-objectstorage.com%252Fimages%252Fe7e10e44-db8a-4c6f-9532-dd07d48ae564.jpg%26w%3D1200%26q%3D95&f=1&nofb=1&ipt=d55379353c646711f77180b015b0446dd3887a3c1903bf86f502a872210d4def",
    brand:"Meggle"
  },
  {
    id:9,
    naziv:'Voda',
    img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcontent.byui.edu%2Ffile%2Fa236934c-3c60-4fe9-90aa-d343b3e3a640%2F1%2Fmodule2%2Fimages%2Fwater_2.png&f=1&nofb=1&ipt=bc877f26c325ebcae4da9bd34fc124f6e12346272270ec41d2de6c53606c4fbc",
    brand:"N/A"
  },
  {
    id:10,
    naziv:"Suhi kvasac",
    img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%2Fid%2FOIP.2wmofE5geaSQnT1DHYMDCwHaHa%3Fr%3D0%26pid%3DApi&f=1&ipt=6014d45648eb2052ff89cfdd933d23880165793a49d5067ecdd2aceae513daa8&ipo=images",
    brand:"N/A"
  },
  {
    id:11,
    naziv:"Sitna sol",
    img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.ueddQw6Ss7Z-SmdpA1AB5gHaLp%3Fr%3D0%26pid%3DApi&f=1&ipt=aa088b0df3ab993b3df1adfb6243010f7bb52d8cc39a7956ea6437f23acc2103&ipo=images",
    brand:"N/A"
  },
  {
    id:12,
    naziv:"Maslinovo ulje",
    img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.Z-ReP9YSpPuDPFW59alVgQHaHa%3Fr%3D0%26pid%3DApi&f=1&ipt=7bc4f1504f42aa47fd2931d174ff4df7648b8f4574fc0951183100968c68df7a&ipo=images",
    brand:"N/A"
  },
  {
    id:13,
    naziv:"Punjene masline",
    img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fapi.cjenoteka.hr%2Fuploads%2Fcache%2Fproduct_large%2Fuploads%2F2025%2F07%2Fpodravka-masline-punjene-pastom-od-paprike-350g-686f6dc43d937.jpeg&f=1&nofb=1&ipt=ead43eec190fbe7c5a69cc98bd143eabfc4a6df2f8dbb6b1d8b99b6f011b72fa",
    brand:"N/A"
  }

]

export default namirnice