# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Tattoo.destroy_all
Style.destroy_all

puts "Inking data..."

User.create(username: "Kenneth Mei", age: 26, password: "upperCase1")
User.create(username: "Mark Wilkins", age: 35, password: "lowerCase2")

# Japanese
Tattoo.create(user_id: nil, style_id: 1, image: "https://dcassetcdn.com/design_img/3961884/807976/26834609/cwd67c86rh9kesy4df26xw7fem_thumbnail.png")
Tattoo.create(user_id: nil, style_id: 1, image: "https://us.123rf.com/450wm/insima/insima2005/insima200500003/148797794-koi-carp-swimming-upstream-japanese-gold-fish-with-water-waves-tattoo-black-and-white-vector-illustr.jpg?ver=6")
Tattoo.create(user_id: nil, style_id: 1, image: "https://papik.pro/en/uploads/posts/2022-06/1655368955_36-papik-pro-p-japanese-tattoo-drawings-38.jpg")
Tattoo.create(user_id: nil, style_id: 1, image: "https://www.jing.fm/clipimg/detail/276-2769056_japanese-dragon-tattoo-design.png")
Tattoo.create(user_id: nil, style_id: 1, image: "https://i.pinimg.com/originals/6f/1c/3a/6f1c3a9e772f0c1b758fb6ce6ec7ca7f.jpg")

# Realism
Tattoo.create(user_id: nil, style_id: 2, image: "https://www.wildtattooart.com/wp-content/uploads/2021/07/realism_tattoos_1808217.jpg")
Tattoo.create(user_id: nil, style_id: 2, image: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2015/08/attachment_101724536-e1591627469805.jpeg?auto=format&q=60&fit=max&w=930")
Tattoo.create(user_id: nil, style_id: 2, image: "https://www.inkedmag.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTU5MDMyMDU0ODMyNzY4Nzky/75-portrait-feat.jpg")
Tattoo.create(user_id: nil, style_id: 2, image: "https://nextluxury.com/wp-content/uploads/roman-numeral-clock-with-man-in-suit-hyper-realistic-guys-arm-tattoo.jpg")
Tattoo.create(user_id: nil, style_id: 2, image: "https://nextluxury.com/wp-content/uploads/pilot-hyper-realistic-guys-forearm-tattoo.jpg")

# Flowers
Tattoo.create(user_id: nil, style_id: 3, image: "https://www.savedtattoo.com/wp-content/uploads/2021/05/Sunflower-Tattoo-Design-1-819x1024.jpg")
Tattoo.create(user_id: nil, style_id: 3, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkxDA3Ql77AMJFhbXJuqQmlIbfMpt0mfKtIwSSJvEkAmrr3vztwl6kKRaKeb0VILTKkkM&usqp=CAU")
Tattoo.create(user_id: nil, style_id: 3, image: "https://stories.freecdr.com/wp-content/uploads/2022/04/Rose-Flower-Tattoos.webp")
Tattoo.create(user_id: nil, style_id: 3, image: "https://www.loveambie.com/wp-content/uploads/2018/01/Lotus-Flower-Thigh-Tattoo-Gorgeous-Red-Lotus-Flower.jpg")
Tattoo.create(user_id: nil, style_id: 3, image: "https://www.savedtattoo.com/wp-content/uploads/2021/05/Hibiscus-Flower-Tattoo-2-1024x966.jpg")

# Classic
Tattoo.create(user_id: nil, style_id: 4, image: "https://www.toptrendsguide.com/wp-content/uploads/2021/11/American-Traditional-Style-Tattoos.jpg")
Tattoo.create(user_id: nil, style_id: 4, image: "https://tattoostylist.com/wp-content/uploads/2021/05/Traditional-flapper-girl-tattoo-by-@fabio_nembo_.png")
Tattoo.create(user_id: nil, style_id: 4, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-v5kvO5KlIBLzGu87fUEaFb_P_UFZDvAo7Q&usqp=CAU")
Tattoo.create(user_id: nil, style_id: 4, image: "https://www.savedtattoo.com/wp-content/uploads/2021/04/Anchor-2-1024x1024.jpg")
Tattoo.create(user_id: nil, style_id: 4, image: "https://live.staticflickr.com/5712/21395760292_3a0c873ff8_z.jpg")

# Skulls
Tattoo.create(user_id: nil, style_id: 5, image: "https://www.toptrendsguide.com/wp-content/uploads/2020/12/Skull-and-Rose-Tattoo-Design-Ideas.jpg")
Tattoo.create(user_id: nil, style_id: 5, image: "https://nextluxury.com/wp-content/uploads/amazing-mens-badass-skull-clock-inner-arm-bicep-tattoo-designs.jpg")
Tattoo.create(user_id: nil, style_id: 5, image: "https://tattoobloq.com/wp-content/uploads/2017/03/Skull-Tattoo-00-1280x720.jpg")
Tattoo.create(user_id: nil, style_id: 5, image: "https://i.pinimg.com/564x/65/bd/71/65bd7190b47ce470ef9fb806a1cb39ab--detailed-tattoo-mobile-art.jpg")
Tattoo.create(user_id: nil, style_id: 5, image: "https://www.fashionbeans.com/wp-content/uploads/2022/01/SkullTattoos_juliaszewczykowska.jpg")

puts "Done tattooing!"

