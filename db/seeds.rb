User.destroy_all
Tattoo.destroy_all
Style.destroy_all

puts "Inking data..."

User.create!(username: "Kenneth Mei", email: "kennethiscool@example.com", profile_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpy6zVMx8VwlWooT_S6GdtdmRUyd7YapK5-_CV3xRtNPqhiK2R5eHlRxQo_y4weG_CGqU&usqp=CAU", password: "upperCase1")
User.create!(username: "Mark Wilkins", email: "markiscool@example.com", profile_img: "https://www.mypokecard.com/en/Gallery/my/galery/siX8kZGKJ3ip.jpg", password: "lowerCase2")
User.create!(username: "james", email: "james@gmail.com", profile_img: "https://www.mypokecard.com/en/Gallery/my/galery/siX8kZGKJ3ip.jpg", password: "123")
demoUser = User.create!(username: "demo", email: "demo@journey.com", password: "password", profile_img: "https://www.notion.so/cdn-cgi/image/w=2048,q=100/https://images.ctfassets.net/spoqsaf9291f/4grR0MZ3Br7Z43zEXZzAMU/9263de5ee31be867003932c5f166e897/E6B7C84D-92BC-49B9-B0E1-149B29BECC0D.png")

Style.create!(style: "Japanese")
Style.create!(style: "Realism")
Style.create!(style: "Flowers")
Style.create!(style: "Traditional")
Style.create!(style: "Skulls")
Style.create!(style: "Geometric")
Style.create!(style: "Sleeves")
Style.create!(style: "Abstract")
Style.create!(style: "Blackout")


# Japanese
Tattoo.create!(user_id: 1, style_id: 1, image_url: "https://dcassetcdn.com/design_img/3961884/807976/26834609/cwd67c86rh9kesy4df26xw7fem_thumbnail.png")
Tattoo.create!(user_id: 1, style_id: 1, image_url: "https://us.123rf.com/450wm/insima/insima2005/insima200500003/148797794-koi-carp-swimming-upstream-japanese-gold-fish-with-water-waves-tattoo-black-and-white-vector-illustr.jpg?ver=6")
Tattoo.create!(user_id: 1, style_id: 1, image_url: "https://papik.pro/en/uploads/posts/2022-06/1655368955_36-papik-pro-p-japanese-tattoo-drawings-38.jpg")
Tattoo.create!(user_id: 1, style_id: 1, image_url: "https://www.jing.fm/clipimg/detail/276-2769056_japanese-dragon-tattoo-design.png")
Tattoo.create!(user_id: 1, style_id: 1, image_url: "https://img.freepik.com/premium-vector/red-crowned-crane-with-lotus-vector-by-hand-drawing_28952-359.jpg?w=2000")
Tattoo.create!(user_id: 1, style_id: 1, image_url: "https://i.pinimg.com/originals/6f/1c/3a/6f1c3a9e772f0c1b758fb6ce6ec7ca7f.jpg")

# Realism
Tattoo.create!(user_id: 1, style_id: 2, image_url: "https://www.wildtattooart.com/wp-content/uploads/2021/07/realism_tattoos_1808217.jpg")
Tattoo.create!(user_id: 1, style_id: 2, image_url: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2015/08/attachment_101724536-e1591627469805.jpeg?auto=format&q=60&fit=max&w=930")
Tattoo.create!(user_id: 1, style_id: 2, image_url: "https://www.inkedmag.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTU5MDMyMDU0ODMyNzY4Nzky/75-portrait-feat.jpg")
Tattoo.create!(user_id: 1, style_id: 2, image_url: "https://nextluxury.com/wp-content/uploads/roman-numeral-clock-with-man-in-suit-hyper-realistic-guys-arm-tattoo.jpg")
Tattoo.create!(user_id: 1, style_id: 2, image_url: "https://nextluxury.com/wp-content/uploads/pilot-hyper-realistic-guys-forearm-tattoo.jpg")
Tattoo.create!(user_id: 1, style_id: 2, image_url: "https://nextluxury.com/wp-content/uploads/shaded-white-rose-flower-hyper-realistic-inner-forearm-tattoos-for-men.jpg")

# Flowers
Tattoo.create!(user_id: 2, style_id: 3, image_url: "https://www.savedtattoo.com/wp-content/uploads/2021/05/Sunflower-Tattoo-Design-1-819x1024.jpg")
Tattoo.create!(user_id: 2, style_id: 3, image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkxDA3Ql77AMJFhbXJuqQmlIbfMpt0mfKtIwSSJvEkAmrr3vztwl6kKRaKeb0VILTKkkM&usqp=CAU")
Tattoo.create!(user_id: 2, style_id: 3, image_url: "https://stories.freecdr.com/wp-content/uploads/2022/04/Rose-Flower-Tattoos.webp")
Tattoo.create!(user_id: 2, style_id: 3, image_url: "https://www.loveambie.com/wp-content/uploads/2018/01/Lotus-Flower-Thigh-Tattoo-Gorgeous-Red-Lotus-Flower.jpg")
Tattoo.create!(user_id: 2, style_id: 3, image_url: "https://www.savedtattoo.com/wp-content/uploads/2021/05/Hibiscus-Flower-Tattoo-2-1024x966.jpg")
Tattoo.create!(user_id: 2, style_id: 3, image_url: "https://stylesatlife.com/wp-content/uploads/2019/02/Best-Flower-Tattoo-Designs-8.jpg.webp")
Tattoo.create!(user_id: 2, style_id: 3, image_url: "http://cdn.shopify.com/s/files/1/1184/2886/articles/bboo_1200x630.jpg?v=1531462723")
Tattoo.create!(user_id: 2, style_id: 3, image_url: "https://www.blufashion.com/wp-content/uploads/2019/05/Flower-Tattoo-Designs.jpg")

# Traditional
Tattoo.create!(user_id: 2, style_id: 4, image_url: "https://tattoostylist.com/wp-content/uploads/2021/05/Traditional-flapper-girl-tattoo-by-@fabio_nembo_.png")
Tattoo.create!(user_id: 2, style_id: 4, image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-v5kvO5KlIBLzGu87fUEaFb_P_UFZDvAo7Q&usqp=CAU")
Tattoo.create!(user_id: 2, style_id: 4, image_url: "https://www.savedtattoo.com/wp-content/uploads/2021/04/Anchor-2-1024x1024.jpg")
Tattoo.create!(user_id: 2, style_id: 4, image_url: "https://live.staticflickr.com/5712/21395760292_3a0c873ff8_z.jpg")
Tattoo.create!(user_id: 2, style_id: 4, image_url: "https://www.toptrendsguide.com/wp-content/uploads/2021/11/American-Traditional-Small-Tattoo-Design.jpg")
Tattoo.create!(user_id: 2, style_id: 4, image_url: "https://bodyartguru.com/wp-content/uploads/2021/09/traditional-tattoos-35.jpg")

# Skulls
Tattoo.create!(user_id: 2, style_id: 5, image_url: "https://www.toptrendsguide.com/wp-content/uploads/2020/12/Skull-and-Rose-Tattoo-Design-Ideas.jpg")
Tattoo.create!(user_id: 2, style_id: 5, image_url: "https://nextluxury.com/wp-content/uploads/amazing-mens-badass-skull-clock-inner-arm-bicep-tattoo-designs.jpg")
Tattoo.create!(user_id: 2, style_id: 5, image_url: "https://i.pinimg.com/564x/65/bd/71/65bd7190b47ce470ef9fb806a1cb39ab--detailed-tattoo-mobile-art.jpg")

# Geometric
Tattoo.create!(user_id: 1, style_id: 6, image_url:  "https://cdn-abcmh.nitrocdn.com/hKwyKHaPYdQPertjJeptpCwDngTecnnQ/assets/static/optimized/rev-a124ca9/wp-content/uploads/2020/04/geometric-tattoo.jpg")
Tattoo.create!(user_id: 1, style_id: 6, image_url:  "https://www.chronicinktattoo.com/wp-content/uploads/2017/04/chronic-ink-sebastian-hand-tattoo-geometric-tattoos-mandala.jpg")
Tattoo.create!(user_id: 1, style_id: 6, image_url:  "https://www.savedtattoo.com/wp-content/uploads/2021/04/Kirk-Nilsen-3-819x1024.jpg")
Tattoo.create!(user_id: 1, style_id: 6, image_url:  "https://nextluxury.com/wp-content/uploads/intricate-black-trees-bear-black-whole-shapes-patterns-forearm-tattoo-abstract-e1587789529696.jpg")
Tattoo.create!(user_id: 1, style_id: 6, image_url:  "https://bodytattoodesign.com/wp-content/uploads/1635994336_Geometric-Sleeve.jpg")
Tattoo.create!(user_id: 1, style_id: 6, image_url:  "https://www.wildtattooart.com/wp-content/uploads/2018/02/geometric-tattoos-11021851.jpg")

# Sleeves
Tattoo.create!(user_id: 1, style_id: 7, image_url:  "https://i.pinimg.com/736x/5a/19/4f/5a194f0a4876aa6b8b4b16600c4149c4.jpg")
Tattoo.create!(user_id: 1, style_id: 7, image_url:  "https://www.toptrendsguide.com/wp-content/uploads/2018/10/Full-Sleeve-Tattoos-Roses-and-Angels.jpg")
Tattoo.create!(user_id: 1, style_id: 7, image_url:  "https://cdn-abcmh.nitrocdn.com/hKwyKHaPYdQPertjJeptpCwDngTecnnQ/assets/static/optimized/rev-a124ca9/wp-content/uploads/2018/10/Sleeve-Tattoo-e1586200631944.jpg")
Tattoo.create!(user_id: 1, style_id: 7, image_url:  "https://image.winudf.com/v2/image/Y29tLmZ1bGxzbGVldmUudGF0dG9vZGVzaWduc19zY3JlZW5fMF8xNTEwMzA4OTQzXzA3NQ/screen-0.jpg?fakeurl=1&type=.webp")
Tattoo.create!(user_id: 1, style_id: 7, image_url:  "https://statica1.b-cdn.net/wp-content/uploads/2021/01/Top-sleeve-tattoo-design-ideas-19-901x1024.jpg")

# Abstract
Tattoo.create!(user_id: 1, style_id: 8, image_url:  "https://www.sovannaphumtattoo.com/wp-content/uploads/2019/12/Abstract-Face-Tattoo-Design-Sovannaphum-Tattoo-Siem-Reap.jpg")
Tattoo.create!(user_id: 1, style_id: 8, image_url:  "https://inkhappened.com/wp-content/uploads/2022/04/abstract-tattoo-planets-lines-color-island-ink.jpg")
Tattoo.create!(user_id: 1, style_id: 8, image_url:  "https://cdn.trendhunterstatic.com/thumbs/psychedelic-tattoos.jpeg?auto=webp")
Tattoo.create!(user_id: 1, style_id: 8, image_url:  "https://i.pinimg.com/736x/d9/46/95/d946958918079c8db62281015c55f2f2--abstract-tattoo-designs-bamboo-tattoo.jpg")
Tattoo.create!(user_id: 1, style_id: 8, image_url:  "https://stylesatlife.com/wp-content/uploads/2019/05/Abstract-Tattoo-Designs-for-Men-and-Women-3.jpg")
Tattoo.create!(user_id: 1, style_id: 8, image_url:  "https://nextluxury.com/wp-content/uploads/full-sleeve-red-male-abstract-star-tattoos.png")
Tattoo.create!(user_id: 1, style_id: 8, image_url:  "https://findtattoodesign.net/storage/6068/colorful-abstract-girls-face-small.jpg")
Tattoo.create!(user_id: 1, style_id: 8, image_url:  "https://www.askideas.com/media/03/Abstract-Tattoo-Design-On-Arm-By-Peter-Aurisch.jpg")

# Blackout
Tattoo.create!(user_id: 1, style_id: 9, image_url:  "https://netstorage-legit.akamaized.net/images/525b34b7924b4775.jpg?imwidth=900")
Tattoo.create!(user_id: 1, style_id: 9, image_url:  "https://kickassthings.com/wp-content/uploads/2018/08/blackout-tattoo-ideas-14.jpg")
Tattoo.create!(user_id: 1, style_id: 9, image_url:  "https://kickassthings.com/wp-content/uploads/2018/08/blackout-tattoo-ideas-for-women-22.jpg")
Tattoo.create!(user_id: 1, style_id: 9, image_url:  "https://kickassthings.com/wp-content/uploads/2018/08/blackout-tattoo-ideas-10.jpg")
Tattoo.create!(user_id: 1, style_id: 9, image_url:  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0JQ3yX49sZXP8YxW2h7PSaXY-hHhqxfYU6w&usqp=CAU")
Tattoo.create!(user_id: 1, style_id: 9, image_url:  "https://kickassthings.com/wp-content/uploads/2018/08/blackout-tattoos-ideas-27.jpg")
Tattoo.create!(user_id: 1, style_id: 9, image_url:  "https://cdn.99images.com/photos/tattoos/best-tattoos/black-rose-wrist-tattoo-design-UZ4EU.jpg")

Favorite.create!(user_id: 1, tattoo_id: 1)


puts "Done tattooing!"