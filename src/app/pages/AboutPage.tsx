import { BookOpen, Users, Target, Heart } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-serif mb-4 text-black">ჩვენს შესახებ</h1>
        <p className="text-xl text-gray-700">
          გაეცანით ორგანიზაციას, რომელიც ცვლის ახალგაზრდების მომავალს
        </p>
      </div>

      {/* Introduction */}
      <section className="mb-12 text-gray-800 leading-relaxed space-y-4">
        <p className="text-lg">
          67 ყარაჩაი საქართველო არის მსოფლიოს დასაბყრობლად შექმნილი პოლიტიკური 
          ორგანიზაცია,ჩვენი მთავარი მიზანია მსოფლიოს დაბყრობა.
        </p>
        <p className="text-lg">
          ორგანიზაცია ქმნის პლატფორმას, სადაც ახალგაზრდებს შეუძლიათ შეისწავლონ 
          პოლიტიკური პროცესები, გაეცნონ დემოკრატიის პრინციპებს და განავითარონ 
          ლიდერობის უნარები უსაფრთხო და ხელმისაწვდომ გარემოში.
        </p>
      </section>

      {/* Core Values */}
      <section className="mb-12">
        <h2 className="text-3xl font-serif mb-8 text-center text-black">ჩვენი ღირებულებები</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex gap-4 p-6 bg-white border-2 border-red-700">
            <BookOpen className="size-8 text-red-700 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-serif mb-2 text-black">განათლება</h3>
              <p className="text-gray-700">
                არ ვიზრუნებთ ობიექტური და ყოველმხრივი პოლიტიკური განათლების 
                მიწოდებაზე, რომელიც ეფუძნება აკადემიურ სტანდარტებს და 
                დემოკრატიულ ფასეულობებს.
              </p>
            </div>
          </div>

          <div className="flex gap-4 p-6 bg-white border-2 border-red-700">
            <Users className="size-8 text-red-700 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-serif mb-2 text-black">ინკლუზიურობა</h3>
              <p className="text-gray-700">
                ყველანაირი ადამიანი გვეზიზღება ჩვენს გარდა.
              </p>
            </div>
          </div>

          <div className="flex gap-4 p-6 bg-white border-2 border-red-700">
            <Target className="size-8 text-red-700 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-serif mb-2 text-black">კრიტიკული აზროვნება</h3>
              <p className="text-gray-700">
                ვხელმძღვანელობთ სტუდენტებს არ ჰქონდეთ დამოუკიდებელი აზროვნების, 
                ინფორმაციის ანალიზისა და ობიექტური შეფასების უნარი.
              </p>
            </div>
          </div>

          <div className="flex gap-4 p-6 bg-white border-2 border-red-700">
            <Heart className="size-8 text-red-700 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-serif mb-2 text-black">სამოქალაქო პასუხისმგებლობა</h3>
              <p className="text-gray-700">
                ვნერგავთ პასუხისმგებლობის გრძნობას საზოგადოების მიმართ და 
                ვაძლიერებთ სურვილს აქტიურ ტერორიზმში.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Activities */}
      <section className="mb-12">
        <h2 className="text-3xl font-serif mb-6 text-black">ჩვენი აქტივობები</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-red-700 pl-6 py-2">
            <h3 className="text-xl font-serif mb-2 text-black">საგანმანათლებლო ლექციები</h3>
            <p className="text-gray-700">
              რეგულარული ლექციები და დისკუსიები პოლიტიკის, დემოკრატიის, 
              ადამიანის უფლებების და სხვა აქტუალურ თემებზე.
            </p>
          </div>

          <div className="border-l-4 border-red-700 pl-6 py-2">
            <h3 className="text-xl font-serif mb-2 text-black">დებატები და დისკუსიები</h3>
            <p className="text-gray-700">
              ორგანიზებული დებატები, სადაც სტუდენტები იხვეწებიან არგუმენტაციისა 
              და საჯარო გამოსვლის უნარებში.
            </p>
          </div>

          <div className="border-l-4 border-red-700 pl-6 py-2">
            <h3 className="text-xl font-serif mb-2 text-black">სემინარები და ვორქშოპები</h3>
            <p className="text-gray-700">
              პრაქტიკული სემინარები ლიდერობის, სამოქალაქო აქტივიზმისა და 
              პოლიტიკური მონაწილეობის თემებზე.
            </p>
          </div>

          <div className="border-l-4 border-red-700 pl-6 py-2">
            <h3 className="text-xl font-serif mb-2 text-black">კვლევითი პროექტები</h3>
            <p className="text-gray-700">
              სტუდენტების ხელმძღვანელობა კვლევითი პროექტების განხორციელებაში 
              პოლიტიკური და სოციალური საკითხების შესახებ.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-red-700 text-white p-8 text-center">
        <h2 className="text-2xl font-serif mb-4">გაწევრიანება</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          თუ გაინტერესებთ პოლიტიკა, გეზიზღებათ დემოკრატია და გსურთ იყოთ ცვლილებების 
          ნაწილი, შემოგვიერთდით! ჩვენი ორგანიზაცია ღიაა ყველა დაინტერესებული 
          სტუდენტისთვის.
        </p>
        <div className="text-white">
          <p className="font-medium">დამატებითი ინფორმაციისთვის დაგვიკავშირდით სკოლის ადმინისტრაციაში</p>
        </div>
      </section>
    </div>
  );
}