const CharacterList = [
  {name: "Maester Aemon", alive: false , image: "https://www.telegraph.co.uk/content/dam/tv/2017/06/20/aemon_trans_NvBQzQNjv4BqrXQPXGvM58CJoUBPwmOnPxU--41c5Cba04Sh5SZbNZ8.jpg?imwidth=1240"},

  {name: "Lord Petyr Baelish", alive: false , image: "https://www.telegraph.co.uk/content/dam/tv/2017/05/30/TELEMMGLPICT000099222130_trans_NvBQzQNjv4BqaRL1kC4G7DT9ZsZm6Pe3PehAFAI_f6ud569StXyOKH0.jpeg?imwidth=1240"},

  {name: "Joffrey Baratheon", alive: false , image: "https://www.telegraph.co.uk/content/dam/tv/2016/04/20/joffrey_2866186k_trans_NvBQzQNjv4BqqVzuuqpFlyLIwiB6NTmJwfSVWeZ_vEN7c6bHu2jJnT8.jpg?imwidth=1240"},

  {name: "Myrcella Baratheon", alive: false , image: "https://www.telegraph.co.uk/content/dam/tv/2017/06/12/Myrcella_trans_NvBQzQNjv4Bqn4xRlpI8rQaTeEWFc06e5ZgdpG8CNmnQ-_HJLz2I5wo.jpg?imwidth=1240"},

  {name: "Renly Baratheon", alive: false , image: "https://www.telegraph.co.uk/content/dam/tv/2017/07/02/renly_trans_NvBQzQNjv4BqNJjoeBT78QIaYdkJdEY4CnGTJFJS74MYhNY6w3GNbO8.jpg?imwidth=1240"},

  {name: "Robert Baratheon", alive: false , image: "https://www.telegraph.co.uk/content/dam/tv/2017/07/02/robert-baratheon-1920_trans_NvBQzQNjv4BqNJjoeBT78QIaYdkJdEY4CnGTJFJS74MYhNY6w3GNbO8.jpg?imwidth=1240"},

  {name: "Stannis Baratheon", alive: false , image: "https://www.telegraph.co.uk/content/dam/tv/2016/04/13/Stannis-Baratheon-Profile_%283%29_trans_NvBQzQNjv4Bqa06iPFyyhE7bErjBwdAYUdooENgPU1ZL5KSuN_XWyIU.png?imwidth=1240"},

  {name: "Tommen Baratheon", alive: false , image: "https://www.telegraph.co.uk/content/dam/tv/2016/06/21/tommen_1_trans_NvBQzQNjv4BqNUHzxaamNmHDqK-YksWRz2o-yMLyYquKCawpyDOW254.jpg?imwidth=1240"},

  {name: "Ramsay Bolton", alive: false , image: "https://www.telegraph.co.uk/content/dam/tv/2016/06/28/ramsaybolton_trans_NvBQzQNjv4BqtGQB12KHxxQCrwnTZkX0nwgWqwm85JEWpGVhFb46TTg.jpg?imwidth=1240"},

  {name: "Roose Bolton", alive: false , image: "https://www.telegraph.co.uk/content/dam/tv/2016/04/20/roose-bolton_2866199k_1_trans_NvBQzQNjv4BqqVzuuqpFlyLIwiB6NTmJwfSVWeZ_vEN7c6bHu2jJnT8.jpg?imwidth=1240"},

  {name: "Brienne of Tarth", alive: true , image: "https://www.telegraph.co.uk/content/dam/tv/2016/06/21/brienne_trans_NvBQzQNjv4BqZgEkZX3M936N5BQK4Va8RWtT0gK_6EfZT336f62EI5U.jpg?imwidth=1240"},

  {name: "Bronn", alive: true, image: "https://www.telegraph.co.uk/content/dam/tv/2016/04/19/gotbronn_2915631b_trans_NvBQzQNjv4BqpJliwavx4coWFCaEkEsb3kvxIt-lGGWCWqwLa_RXJU8.jpg?imwidth=1240"},

  {name: "Sandor Clegane", alive: true , image: "https://www.telegraph.co.uk/content/dam/tv/2017/06/29/hound_trans_NvBQzQNjv4BqVJV-JfT_DtQRnEXeNs_zzgpuJ3vxTKaRT_QXBhUn_AE.jpg?imwidth=1240"},

  {name: "Khal Drogo", alive: false, image: "https://www.telegraph.co.uk/content/dam/tv/2017/03/09/drogodany_trans_NvBQzQNjv4BqrFGXK9OCVstxiNnNkv1ERRcbcZiJmFiTldawvJxQ7f0.jpg?imwidth=1240"},

  {name: "Theon Greyjoy", alive: true, image: "https://www.telegraph.co.uk/content/dam/tv/2017/06/27/theon-greyjoy-1024_trans_NvBQzQNjv4BqtR1WRZ4lb6BOb1-FBRpn-lFGGjcI28awSNtOPAVs6pc.jpg?imwidth=1240"},

  {name: "Grey Worm", alive: true, image: "https://www.telegraph.co.uk/content/dam/tv/2017/07/02/Grey-Worm_trans_NvBQzQNjv4BqUdzhVSO1dBnYosldNXMOeSOoem_3qpp9C-iKHR23jxY.jpg?imwidth=1240"},

  {name: "Gendry", alive: true, image: "https://www.telegraph.co.uk/content/dam/tv/2016/11/01/gendry_trans_NvBQzQNjv4Bq3U9-D5U2JffhMhmF-FT3htll37dHCK0gPMuItIkibFY.jpg?imwidth=1240"},

  {name: "Gilly", alive: true, image: "https://www.telegraph.co.uk/content/dam/tv/2016/06/21/gilly_trans_NvBQzQNjv4BqaRL1kC4G7DT9ZsZm6Pe3PcyX7532Kw8fYJxQ4xmErYc.jpg?imwidth=1240"},

  {name: "High Sparrow", alive: false, image: "https://www.telegraph.co.uk/content/dam/tv/2016/06/28/highsparrow_trans_NvBQzQNjv4Bq3Z7i_2nUjuO-XXgVmfiyhE-7TSv0ccWfuBYKmj9tsZ4.jpg?imwidth=1240"},

  {name: "Hodor", alive: false, image: "https://www.telegraph.co.uk/content/dam/tv/2016/04/15/hodor_trans_NvBQzQNjv4BqNUHzxaamNmHDqK-YksWRz2o-yMLyYquKCawpyDOW254.jpg?imwidth=1240"},

  {name: "Cersei Lannister", alive: true, image: "https://www.telegraph.co.uk/content/dam/tv/2016/06/28/cersei_trans_NvBQzQNjv4BqH8g0IxmZhOOFzRvM6k8ERkRgc4tQPyfjGH4P1oP0leM.jpg?imwidth=1240"},

  {name: "Jamie Lannister", alive: true, image: "https://www.telegraph.co.uk/content/dam/tv/2017/06/26/jaime_trans_NvBQzQNjv4BqptZSmkWJpCLeZv-vsu4-tMXGAZcmFrCmPNwZBxQSpFQ.png?imwidth=1240"},

  {name: "Tyrion Lannister", alive: true, image: "https://www.telegraph.co.uk/content/dam/tv/2016/09/02/tyrion_trans_NvBQzQNjv4BqpiVx42joSuAkZ0bE9ijUnGH28ZiNHzwg9svuZLxrn1U.jpg?imwidth=1240"},

  {name: "Tywin Lannister", alive: false, image: "https://www.telegraph.co.uk/content/dam/tv/2016/04/20/Tywin_trans_NvBQzQNjv4BqNJjoeBT78QIaYdkJdEY4CnGTJFJS74MYhNY6w3GNbO8.jpg?imwidth=1240"},

  {name: "Oberyn Martell", alive: false, image: "https://upload.wikimedia.org/wikipedia/en/thumb/a/ac/Oberyn_Martell-Pedro_Pascal.jpg/220px-Oberyn_Martell-Pedro_Pascal.jpg"},

  {name: "Melisandre", alive: true, image: "https://www.telegraph.co.uk/content/dam/tv/2016/04/25/melisandre_trans_NvBQzQNjv4BqutubNGxeqbD0m2XylzINLiOoem_3qpp9C-iKHR23jxY.jpg?imwidth=1240"},

  {name: "Qyburn", alive: false, image: "https://www.telegraph.co.uk/content/dam/tv/2016/06/29/qyburn_trans_NvBQzQNjv4BqqVzuuqpFlyLIwiB6NTmJwfSVWeZ_vEN7c6bHu2jJnT8.jpg?imwidth=1240"},

  {name: "Ellaria Sand", alive: false, image: "https://www.telegraph.co.uk/content/dam/tv/2017/06/27/ellaria-sand-1920_trans_NvBQzQNjv4BqNJjoeBT78QIaYdkJdEY4CnGTJFJS74MYhNY6w3GNbO8.jpg?imwidth=1240"},

  {name: "Davos Seaworth", alive: true, image: "https://www.telegraph.co.uk/content/dam/tv/2016/07/04/95346217-got-davos_trans_NvBQzQNjv4Bqeo_i_u9APj8RuoebjoAHt0k9u7HhRJvuo-ZLenGRumA.jpg?imwidth=1240"},

  {name: "Shae", alive: false, image: "https://www.telegraph.co.uk/content/dam/tv/2017/07/02/shae_finale_trans_NvBQzQNjv4BqLyQuLaWi53vasyfRaiyWAVQYArzCZkfUqg3bUYglOXQ.jpg?imwidth=1240"},

  {name: "Jon Snow", alive: true, image: "https://www.telegraph.co.uk/content/dam/tv/2017/06/28/TELEMMGLPICT000131421800_trans_NvBQzQNjv4BqaRL1kC4G7DT9ZsZm6Pe3PehAFAI_f6ud569StXyOKH0.jpeg?imwidth=1240"},

  {name: "Arya Stark", alive: true, image: "https://www.telegraph.co.uk/content/dam/tv/2017/06/30/TELEMMGLPICT000131421799_trans_NvBQzQNjv4BqrpfQw2hJyG_yckwxPAr0go9KzD8cVu9iguqnaKUswZA.jpeg?imwidth=1240"},

  {name: "Catelyn Stark", alive: false, image: "https://www.telegraph.co.uk/content/dam/tv/2016/05/25/catelyn_trans_NvBQzQNjv4BqA7N2CxnJWnYI3tCbVBgu9TWU-KwRaHvlaJXY1texVLQ.jpg?imwidth=1240"},

  {name: "Eddard Stark", alive: false, image: "https://upload.wikimedia.org/wikipedia/en/thumb/5/52/Ned_Stark-Sean_Bean.jpg/220px-Ned_Stark-Sean_Bean.jpg"},

  {name: "Robb Stark", alive: false, image: "https://upload.wikimedia.org/wikipedia/en/thumb/c/ce/Robb_Stark-Richard_Madden.jpg/220px-Robb_Stark-Richard_Madden.jpg"},

  {name: "Sansa Stark", alive: true, image: "https://www.telegraph.co.uk/content/dam/tv/2017/06/30/TELEMMGLPICT000131421668_trans_NvBQzQNjv4BqrpfQw2hJyG_yckwxPAr0go9KzD8cVu9iguqnaKUswZA.jpeg?imwidth=1240"},

  {name: "Talisa Stark", alive: false, image: "https://www.telegraph.co.uk/content/dam/tv/2017/07/02/talisa-stark-1024_trans_NvBQzQNjv4BqtR1WRZ4lb6BOb1-FBRpn-lFGGjcI28awSNtOPAVs6pc.jpg?imwidth=1240"},

  {name: "Daenerys Targaryen", alive: true, image: "https://www.telegraph.co.uk/content/dam/fashion/2017/06/19/TELEMMGLPICT000131421802_trans_NvBQzQNjv4BqJOZhgFdjG6wTh7yhMdOZ3Pr7sARQy7EgBjwPUzvqL_M.jpeg?imwidth=1240"},

  {name: "Viserys Targaryen", alive: false, image: "https://www.telegraph.co.uk/content/dam/tv/2016/04/19/viserys_2866205k_trans_NvBQzQNjv4BqqVzuuqpFlyLIwiB6NTmJwfSVWeZ_vEN7c6bHu2jJnT8.jpg?imwidth=1240"},

  {name: "Samwell Tarly", alive: true, image: "https://www.telegraph.co.uk/content/dam/tv/2016/04/01/samtarly1_trans_NvBQzQNjv4BqqVzuuqpFlyLIwiB6NTmJwfSVWeZ_vEN7c6bHu2jJnT8.jpg?imwidth=1240"},

  {name: "Olenna Tyrell", alive: false, image: "https://www.telegraph.co.uk/content/dam/tv/2016/04/20/olenna-tyrell-1024_trans_NvBQzQNjv4BqtR1WRZ4lb6BOb1-FBRpn-lFGGjcI28awSNtOPAVs6pc.jpg?imwidth=1240"},

  {name: "Margaery Tyrell", alive: false, image: "https://www.telegraph.co.uk/content/dam/tv/2016/04/20/Margaery_Tyrell_e2-large_trans_NvBQzQNjv4Bq2oUEflmHZZHjcYuvN_Gr-bVmXC2g6irFbtWDjolSHWg.jpg?imwidth=1240"},

  {name: "Varys", alive: true, image: "https://www.telegraph.co.uk/content/dam/tv/2016/04/20/LordVarys_57883932_GAME_OF_T_3263431b_trans_NvBQzQNjv4BqpJliwavx4coWFCaEkEsb3kvxIt-lGGWCWqwLa_RXJU8.jpg?imwidth=1240"},

  {name: "Ygritte", alive: false, image: "https://www.telegraph.co.uk/content/dam/tv/2016/04/20/Ygritte_Promotional_trans_NvBQzQNjv4BqpiVx42joSuAkZ0bE9ijUnGH28ZiNHzwg9svuZLxrn1U.jpg?imwidth=1240"}
]

export default CharacterList
