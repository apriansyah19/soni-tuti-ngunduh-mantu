<template>
  <div class="h-screen w-screen flex justify-center">
    <div
      class="h-full w-full md:w-1/3 md:mx-auto bg-[url(./foto_1_new_cut.jpg)] relative bg-contain bg-auto bg-cover bg-center py-8 text-[#958277] font-[300] font-akaya flex relative z-20 transition-transform ease-in-out delay-500"
      :class="[show ? '-translate-y-full' : '']"
    >
      <audio id="audio" loop>
        <source src="../assets/audios/ngunduhMantuBS_cut.mp3" type="audio/mpeg" />
      </audio>
      <div class="min-h-1/2 w-4/5 m-auto">
        <!-- <img src="../../public/decoration-2.png" class="w-full" /> -->
        <!-- <h2
          class="uppercase text-center tracking-[1px] mt-6 text-[calc(20px*0.75)] animate-[fade-in-top_1s_ease-in-out_0.8s_both]"
        >
          Pernikahan dari
        </h2> -->
        <!-- <div class="w-2/5 h-full m-auto mt-3">
         <img
                src="../assets/images/soni_tuti2.jpg"
                class="w-full h-full rounded-xl shadow-2xl shadow-emerald-900"
                data-aos="zoom-in-up"
                data-aos-duration="1500"
                data-aos-once="true"
                alt=""
              />
        </div> -->
        <div class="fixed bottom-10 left-0 right-0">
          <h1
            class="text-center text-[#ffffff] text-[calc(50px*0.75)] leading-[1] tracking-[2px] mt-4 pt-4 animate-[scale-in-bottom_1s_ease-in-out_1.1s_both]" style="text-shadow: 2px 3px 2px #171616;"
          >
            Soni & Tuti
          </h1>
          <!-- <h2
            class="uppercase text-center tracking-[1px] my-2 text-[calc(20px*0.75)] animate-[fade-in-bottom_1s_ease-in-out_1.5s_both]"
          >
            Rabu, 18 Mei 2022
          </h2> -->

          <h2
            class="uppercase text-[#ffffff] text-center tracking-[1px] mt-8 text-[calc(14px*0.75)] animate-[fade-in-top_1s_ease-in-out_1.8s_both]" style="text-shadow: 3px 1px 3px #171616;"
          >
            Yang terhormat
          </h2>
          <h1
            class="text-center text-[#ffffff] font-akaya text-[calc(36px*0.75)] leading-[1] tracking-[2px] pt-4 pb-4 animate-[scale-in-bottom_1s_ease-in-out_2.1s_both] capitalize" style="text-shadow: 2px 3px 2px #171616;"
          >
            {{ undangan.replace(/\;/g, " ").replace(/\=/g, "&") }}
          </h1>
          <p
            class=" text-[#ffffff] text-center text-[calc(15px*0.75)] animate-[fade-in-bottom_1s_ease-in-out_2.4s_both] px-4" style="text-shadow: 3px 1px 3px #171616;"
          >
            Kami mengundang anda untuk hadir diacara Ngunduh Mantu kami.
          </p>
          <div class="animate-[fade-in-top_1s_ease-in-out_2.5s_both]">
            <button
              @click="clickOpen"
              class="animate-bounce px-2 py-2 bg-[#958277] text-white rounded-lg mt-8 hover:opacity-80 focus:outline-none active:outline-none text-base block mx-auto"
            >
              <i class="fas fa-heart text-red-500 shadow"></i> Buka Undangan
            </button>
          </div>
        </div>
        <!-- <img
          src="../../public/decoration-2.png"
          class="w-full mt-8 rotate-180"
        /> -->
      </div>
    </div>

    <div
      class="w-full h-full md:w-1/3 md:mx-auto bg-[#cfcabc] absolute z-0 top-0 text-[#6b6b67]"
      v-if="show"
      :class="[modal ? 'overflow-y-hidden' : 'overflow-y-visible']"
    >
      <Menu :modal="modal" class="md:w-1/3" />

      <button
        @click="onClickMuted"
        class="z-[48] fixed bottom-[40%] right-1 outline-none active:border-none focus:border-none p-2 bg-[#958277] rounded-full flex"
      >
        <i
          class="text-white fas m-auto align-middle"
          :class="[!muted ? 'fa-volume-up' : 'fa-volume-mute']"
        ></i>
      </button>

      <Modal :withButton="false" @toggle-modal="modal = false" />
      <!-- <div class="min-h-screen w-screen flex bg-[#fff]">

      <div class="min-h-1/2 w-4/5 m-auto">
        <img src="../../public/decoration-2.png" class="w-full rotate-180" />
        <h2 class="uppercase text-center text-2xl tracking-[1px] mt-8">
          وَمِنْ كُلِّ شَيْءٍ خَلَقْنَا زَوْجَيْنِ لَعَلَّكُمْ تَذَكَّرُونَ
        </h2>
        <p class="text-sm text-center mt-6">
          Artinya: “Dan segala sesuatu Kami Ciptakan Berpasang – pasangan supaya
          kamu mengingat kebesaran Allah.”(Adz-Dzariyat ayat 49)
        </p>
        <img src="../../public/decoration-2.png" class="w-full mt-8" />
      </div>
    </div> -->

      <div
        class="min-h-screen w-full md:mx-auto flex bg-[#cfcabc] font-akaya "
        id="kata-pengantar"
      >

        <div class="min-h-1/2 w-4/5 m-auto pb-36">
          <img src="../../public/decoration-16.png" class="w-full mb-4" />
          <img
            src="../assets/images/bismillah.png"
            class="w-3/5 mx-auto mb-6"
            alt="bismillah"
          />
          <h1 class="text-center text-3xl mb-8">
            Assalamualaikum Wr. Wb.
          </h1>
          <p
            class="text-base text-center mb-4 leading-5"
            data-aos="zoom-in-up"
            data-aos-duration="1500"
            data-aos-once="true"
          >
            Mahasuci Allah SWT telah menciptakan mahluk hidup dengan
            berpasang-pasangan. Begitu pula manusia. Sungguh besar rahmat dan
            karunia yang diberikan-Nya kepada keluarga kami.
          </p>
          <p
            class="text-base text-center my-4 leading-5"
            data-aos="zoom-in-down"
            data-aos-duration="1500"
            data-aos-once="true"
          >
            Maka izinkan kami mengundang sekaligus mengharapkan doa restu dari
            bapak/ibu dan saudara/i dalam acara ngunduh mantu kami
          </p>
          <img
            src="../../public/decoration-17.png"
            class="w-full mt-4"
          />
        </div>
      </div>

      <div
        class="min-h-screen w-full mx-auto flex bg-[#cfcabc] font-akaya snow-bg"
        id="mempelai-wanita"
      >
        <div class="min-h-1/2 w-full m-auto pb-36">
          <img src="../../public/decoration-27.png" class="w-full mb-4" />
          <h1
            class="text-center text-3xl mb-4"
            data-aos="zoom-in-down"
            data-aos-duration="1500"
            data-aos-once="true"
          >
            Mempelai Wanita
          </h1>

          <div class="columns-2 flex">
            <div class="w-1/3 h-full relative">
              <img
                src="../assets/images/tuti_solo.jpg"
                class="w-full h-full rounded-xl ml-3 shadow-2xl shadow-[#6b6b67]"
                data-aos="zoom-in-up"
                data-aos-duration="1500"
                data-aos-once="true"
                alt=""
              />
            </div>

            <div class="m-auto w-2/3">
              <h2
                class="text-center text-2xl px-2 w-full"
                data-aos="zoom-in-up"
                data-aos-duration="1500"
                data-aos-once="true"
              >
                 Tuti Hasanah,
                <span class="text-xl">S.I.Kom.</span>
              </h2>
              <p
                class="text-center w-full text-sm mx-auto mt-4 leading-4 px-2"
                data-aos="zoom-in-down"
                data-aos-duration="1500"
                data-aos-once="true"
              >
                <b>Putri Kedua</b> dari Bapak <br />
                <b>Adek Suherman</b> <br />
                & Ibu <b>Ita Maya Sari</b>
              </p>
            </div>
          </div>

          <img
            src="../../public/decoration-27.png"
            class="w-full mt-4 rotate-180"
          />
        </div>
      </div>

      <div
        class="min-h-screen w-full flex bg-[#cfcabc] font-akaya snow-bg"
        id="mempelai-pria"
      >
        <div class="min-h-1/2 w-full m-auto pb-36">
          <img src="../../public/decoration-35.png" class="w-full mb-4" />
          <h1
            class="text-center text-3xl mb-4"
            data-aos="zoom-in-down"
            data-aos-duration="1500"
            data-aos-once="true"
          >
            Mempelai Pria
          </h1>

          <div class="columns-2 flex">
            <div class="m-auto w-2/3">
              <h2
                class="text-center text-2xl px-2"
                data-aos="zoom-in-up"
                data-aos-duration="1500"
                data-aos-once="true"
              >
                Soni Putrawan, <span class="text-xl">A.Md.</span>
              </h2>

              <p
                class="text-center w-[90%] text-sm mx-auto leading-4 mt-4 px-2"
                data-aos="zoom-in-down"
                data-aos-duration="1500"
                data-aos-once="true"
              >
                <b>Putra Keempat</b> dari Bapak
                <b> <br />Sugito (Alm. )</b>
                <br />
                & Ibu
                <b>Martini</b>
              </p>
            </div>

            <div class="w-1/3 h-full relative mr-3">
              <img
                src="../assets/images/soni_solo.jpg"
                class="w-full h-full rounded-xl shadow-2xl shadow-[#6b6b67]"
                data-aos="zoom-in-up"
                data-aos-duration="1500"
                data-aos-once="true"
                alt=""
              />
            </div>
          </div>

          <img
            src="../../public/decoration-36.png"
            class="w-full mt-4"
          />
        </div>
      </div>

      <div class="min-h-screen w-full flex bg-[#cfcabc] font-akaya snow-bg" id="dday">
        <div class="min-h-1/2 w-full m-auto pb-36">

          <div class="w-full h-full relative">
            <!-- <img
            src="../assets/images/ta-2.png"
            class="w-full h-full"
            data-aos="zoom-in-up"
            data-aos-duration="1500"
            data-aos-once="true"
            alt=""
          /> -->
          </div>
          <div
              class="flex justify-evenly items-center mb-4"
              data-aos="zoom-in-down"
              data-aos-duration="1500"
              data-aos-once="true"
            >
              <h1 class="text-4xl mt-2">Soni & Tuti</h1>
            </div>


          <div class="w-full h-full py-4">
            <!-- <p
              class="text-center mb-4 px-4"
              data-aos="zoom-in-up"
              data-aos-duration="1500"
              data-aos-once="true"
            >
              akan melaksanakan
            </p> -->
            <div
              class="w-[80%] bg-[url(./image1.png)] bg-[#cfc3bd] h-[250px] bg-blend-multiply bg-[center_top_-2rem] bg-cover text-white p-4 mx-auto rounded-xl border-[1px] border-[#CED4D9] mb-4 flex flex-col justify-end shadow-slate-400 shadow-lg"
              data-aos="zoom-in-down"
              data-aos-duration="1500"
              data-aos-once="true"
            >
              <h1 class="text-xl text-center mb-4">Akad Nikah</h1>
              <p class="text-center text-sm">
                <i class="fas fa-calendar"></i> Telah dilaksanakan Rabu, 18 Mei 2022
              </p>
              <!-- <p class="text-center text-sm">
                <i class="fas fa-clock"></i> 08:00 - Selesai WIB
              </p> -->
            </div>
            <img  
              src="../../public/decoration-40.png" 
              class="w-full mb-1"
              data-aos="zoom-in-down"
              data-aos-duration="1500"
              data-aos-once="true" 
              />
            <div
              class="w-[80%] bg-[url(./foto_1_new.jpg)] h-[250px] bg-blend-multiply bg-top bg-cover text-white p-4 mx-auto rounded-xl border-[1px] border-[#CED4D9] mb-4 flex flex-col justify-end shadow-slate-400 shadow-lg"
              data-aos="zoom-in-down"
              data-aos-duration="1500"
              data-aos-once="true"
            >
              <h1 class="text-xl text-center mb-4" style="text-shadow: 3px 1px 3px #6b6b67;">Ngunduh Mantu</h1>
              <p class="text-center text-sm" style="text-shadow: 3px 1px 3px #6b6b67;">
                <i class="fas fa-calendar"></i> Minggu, 26 Juni 2022
              </p>
              <p class="text-center text-sm" style="text-shadow: 3px 1px 3px #6b6b67;">
                <i class="fas fa-clock"></i> 09:00 - Selesai WIB
              </p>
            </div>

            <div
              data-aos="zoom-in-up"
              data-aos-duration="1500"
              data-aos-once="true"
            >
              <Countdown
                :time="dday"
                v-slot="{ days, hours, minutes, seconds }"
                v-if="dday > 0"
              >
                <div
                  class="flex justify-center items-stretch text-white gap-4 text-akaya"
                >
                  <div
                    class="font-akaya rounded-lg bg-[#958277] w-[60px] p-1 text-center"
                  >
                    {{ days }} <br />Hari
                  </div>
                  <div
                    class="font-akaya rounded-lg bg-[#958277] w-[60px] p-1 text-center"
                  >
                    {{ hours }} <br />Jam
                  </div>
                  <div
                    class="font-akaya rounded-lg bg-[#958277] w-[60px] p-1 text-center"
                  >
                    {{ minutes }} <br />Menit
                  </div>
                  <div
                    class="font-akaya rounded-lg bg-[#958277] w-[60px] p-1 text-center"
                  >
                    {{ seconds }} <br />Detik
                  </div>
                </div>
              </Countdown>

              <div
                v-else-if="-86484928 < dday"
                class="p-3 bg-[#958277] text-white text-lg mx-10 text-center shadow rounded-[10px]"
              >
                Acara sedang Berlangsung Hari Ini!
              </div>
              <div
                v-else
                class="p-3 bg-[#958277] text-white text-lg mx-10 text-center shadow rounded-[10px]"
              >
                Acara sudah Selesai!
              </div>
              <!-- <div v></div> -->
            </div>
          </div>

          <!-- <img
          src="../../public/decoration-2.png"
          class="w-full mt-6 rotate-180"
        /> -->
        </div>
      </div>

      <div class="min-h-screen w-full flex bg-[#cfcabc] font-akaya snow-bg" id="lokasi">
          <div class="min-h-1/2 m-auto pb-36">
            <img src="../../public/decoration-2.png" class="w-full mb-4" />
               <!-- <h1
            class="text-center text-3xl mb-4"
            data-aos="zoom-in-up"
            data-aos-duration="1500"
            data-aos-once="true"
          >
            Akad Nikah & Resepsi
          </h1> -->
          <!-- <img
            src="../assets/images/gedung.png"
            data-aos="zoom-in-down"
            data-aos-duration="1500"
            data-aos-once="true"
            class="w-3/5 mx-auto"
            alt=""
          /> -->
          <div
              class="w-[95%] m-auto rounded-xl border-[1px] border-[#CED4D9] bg-white"
              data-aos="zoom-in-down"
              data-aos-duration="1500"
              data-aos-once="true"
            >
            <div class="w-[97%] m-auto">
             <iframe 
              width="100%" 
              height="350" 
              frameborder="0" 
              scrolling="no" 
              marginheight="0" 
              marginwidth="0" 
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d249.02579920512838!2d104.73633907775816!3d-2.982836022772477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e3b755c7f2b41c5%3A0x6fcdace0b5e7cfc1!2sKost%20Bu%20JAMILAH!5e0!3m2!1sid!2sid!4v1655116598588!5m2!1sid!2sid">
          </iframe>
          
          
            <!-- <GoogleMap
            api-key="AIzaSyAOEwijcOqYLlzcwx98L7E0DoCw0Ng4ME8"
            style="width: 100%; height: 370px"
            :center="center"
            :zoom="17"
            >
              <Marker :options="{ 
                position: center,
                icon: {
                  url: 'https://cdn-icons.flaticon.com/png/512/769/premium/769633.png?token=exp=1649911868~hmac=11a35149b0d819dbc1193d3bd1fbef93',
                  scaledSize: { height: 43, width: 40 },
                 }
                }" />
            </GoogleMap> -->
            </div>

          </div>
            <h2
              class="text-center text-lg mt-4"
              data-aos="zoom-in-up"
              data-aos-duration="1500"
              data-aos-once="true"
            >
              Tempat Lokasi
            </h2>
            <h3
              class="text-center text-base mt-2"
              data-aos="zoom-in-down"
              data-aos-duration="1500"
              data-aos-once="true"
            >
              Minggu, 26 <sup>th</sup> June 2022
            </h3>
            <p
              class="text-center text-xs mt-2"
              data-aos="zoom-in-up"
              data-aos-duration="1500"
              data-aos-once="true"
            >
              Gg. Ikhlas, Lorok Pakjo, Kec. Ilir Bar. I, Kota Palembang, Sumatera Selatan
            </p>
            <div
              class="w-full flex"
              data-aos="zoom-in-down"
              data-aos-duration="1500"
              data-aos-once="true"
            >
              <a
                target="_blank"
                href="https://goo.gl/maps/pVxmJQTxju7o3ugm7"
                class="animate-bounce px-2 py-2 max-w-xl bg-[#958277] text-white rounded-lg mt-8 hover:opacity-80 focus:outline-none active:outline-none text-base text-center inline-block mx-auto"
              >
                Lihat Lokasi
              </a>
            </div>
            <img
              src="../../public/decoration-2.png"
              class="w-full mt-4 rotate-180"
            />
        </div>
      </div>

      <div
        class="min-h-screen w-full flex bg-[#cfcabc] font-akaya snow-bg"
        id="galeri-foto"
      >
        <div class="min-h-1/2 w-full m-auto pb-36">
          <h1
            class="text-center text-3xl mb-4"
            data-aos="zoom-in-up"
            data-aos-duration="1500"
            data-aos-once="true"
          >
            Galeri Foto
          </h1>
          <img 
            src="../../public/decoration-38.png" 
            data-aos="zoom-in-up"
            data-aos-duration="1500"
            data-aos-once="true"
            class="w-full mb-1" 
          />

          <div class="flex m-auto">
          <div class="w-full h-full relative mx-2 mb-3">
              <img
                src="../assets/images/foto_1_new.jpg"
                class="w-full h-full rounded-xl shadow-lg shadow-[#6b6b67]"
                data-aos="zoom-in-up"
                data-aos-duration="1500"
                data-aos-once="true"
                alt=""
              />
            </div>
          </div>

          <div class="flex m-auto">

            <div class="w-1/3 h-full relative ml-3">
              <img
                src="../assets/images/foto_3_new.jpg"
                class="w-full h-full rounded-xl shadow-lg shadow-emerald-900"
                data-aos="zoom-in-up"
                data-aos-duration="1500"
                data-aos-once="true"
                alt=""
              />
            </div>

            <div class="w-1/3 h-full relative mx-2">
              <img
                src="../assets/images/soni_solo.jpg"
                class="w-full h-full rounded-xl shadow-lg shadow-[#6b6b67]"
                data-aos="zoom-in-up"
                data-aos-duration="1500"
                data-aos-once="true"
                alt=""
              />
            </div>

            <div class="w-1/3 h-full relative mr-3">
              <img
                src="../assets/images/foto_5_new.jpg"
                class="w-full h-full rounded-xl shadow-lg shadow-[#6b6b67]"
                data-aos="zoom-in-up"
                data-aos-duration="1500"
                data-aos-once="true"
                alt=""
              />
            </div>
            
          </div>

          <div class="flex m-auto mt-4">
            <!-- <div class="m-auto w-2/3">

            </div> -->

            <div class="w-1/3 h-full relative ml-3">
              <img
                src="../assets/images/foto_2_new.jpg"
                class="w-full h-full rounded-xl shadow-lg shadow-[#6b6b67]"
                data-aos="zoom-in-up"
                data-aos-duration="1500"
                data-aos-once="true"
                alt=""
              />
            </div>

            <div class="w-1/3 h-full relative mx-2">
              <img
                src="../assets/images/tuti_solo.jpg"
                class="w-full h-full rounded-xl shadow-lg shadow-[#6b6b67]"
                data-aos="zoom-in-up"
                data-aos-duration="1500"
                data-aos-once="true"
                alt=""
              />
            </div>

            <div class="w-1/3 h-full relative mr-3">
              <img
                src="../assets/images/foto_4_new.jpg"
                class="w-full h-full rounded-xl shadow-lg shadow-[#6b6b67]"
                data-aos="zoom-in-up"
                data-aos-duration="1500"
                data-aos-once="true"
                alt=""
              />
            </div>
            
          </div>

          <img
            src="../../public/decoration-37.png"
            class="w-full mt-1"
            data-aos="zoom-in-up"
            data-aos-duration="1500"
            data-aos-once="true"
          />
        </div>
      </div>

      <div class="min-h-screen w-full flex bg-[#cfcabc] font-akaya snow-bg" id="ucapan">
        <div class="min-h-1/2 px-6 m-auto pb-36">
          <img src="../../public/decoration-2.png" class="w-full mb-4" />
          <h1
            class="text-center text-3xl mb-4"
            data-aos="zoom-in-up"
            data-aos-duration="1500"
            data-aos-once="true"
          >
            Ucapkan Sesuatu
          </h1>

          <p
            class="text-center mb-4"
            data-aos="zoom-in-down"
            data-aos-duration="1500"
            data-aos-once="true"
          >
            Berikan Ucapan & Do'a Restu
          </p>

          <input
            type="text"
            class="p-2 border-2 border-[#CED4D9] rounded-lg w-full mb-4 bg-[#FFF9F6] text-[#958277] placeholder:text-[#958277] font-sans text-[12px]"
            placeholder="Nama Anda"
            v-model="nama"
            data-aos="zoom-in-up"
            data-aos-duration="1500"
            data-aos-once="true"
          />

          <select
            class="w-full rounded-lg p-2 border-2 border-[#CED4D9] mb-4 bg-[#FFF9F6] text-[#958277] placeholder:text-[#958277] font-sans text-[12px]"
            v-model="konfirmasi"
            data-aos="zoom-in-down"
            data-aos-duration="1500"
            data-aos-once="true"
          >
            <option :value="null">Pilih Konfirmasi Kehadiran</option>
            <option value="hadir">Hadir</option>
            <option value="tidak">Tidak Hadir</option>
          </select>

          <textarea
            class="p-2 border-2 border-[#CED4D9] rounded-lg w-full mb-4 bg-[#FFF9F6] text-[#958277] placeholder:text-[#958277] font-sans text-[12px]"
            v-model="ucap"
            cols="30"
            rows="3"
            placeholder="Berikan Ucapan & Do'a Restu"
            data-aos="zoom-in-up"
            data-aos-duration="1500"
            data-aos-once="true"
          ></textarea>

          <div
            class="animate-[fade-in-top_1s_ease-in-out_2.5s_both]"
            data-aos="zoom-in-down"
            data-aos-duration="1500"
            data-aos-once="true"
          >
            <button
              @click="onClickKirim"
              class="animate-bounce min-w-[75px] px-2 py-2 bg-[#958277] text-white rounded-lg hover:opacity-80 focus:outline-none active:outline-none text-base block mx-auto mb-4"
            >
              Kirim
            </button>
          </div>

          <img
            src="../../public/decoration-2.png"
            class="w-full mb-4 rotate-180"
          />

          <div
            class="p-2 max-h-[150px] shadow-lg rounded-lg border-[1px] border-[#CED4D9] bg-[#FFF9F6] flex flex-col w-[90%] mx-auto mb-4 font-sans"
            v-for="ucapan in ucapan"
            :key="ucapan.id"
            data-aos="zoom-in-up"
            data-aos-duration="1500"
            data-aos-once="true"
          >
            <div class="flex justify-between text-sm items-center mb-2">
              <h1 class="text-xs font-bold capitalize">{{ ucapan.nama }}</h1>
              <span
                class="bg-[#958277] rounded-xl text-white text-[8px] px-1 py-[2px]"
                v-if="ucapan.konfirmasi === 'hadir'"
                ><i class="fas fa-check"></i> Hadir</span
              >
              <span
                class="bg-[#958277] rounded-xl text-white text-[8px] px-1 py-[2px] self-baseline"
                v-else
                ><i class="fas fa-times"></i> Tidak Hadir</span
              >
            </div>
            <div class="italic text-xs overflow-y-scroll w-full h-full">
              "{{ ucapan.ucapan }}"
            </div>
          </div>

          <div
            class="w-full flex justify-center items-center"
            data-aos="zoom-in-down"
            data-aos-duration="1500"
            data-aos-once="true"
          >
            <button
              class="py-[2px] px-4 bg-[#958277] border-x-2 rounded text-white text-center"
              :class="[index === offset / limit ? 'opacity-70' : '']"
              @click="index !== offset / limit ? clickNext(index * limit) : ''"
              v-for="(data, index) in Math.ceil(allUcapanLength / limit)"
              :key="index"
            >
              {{ index + 1 }}
            </button>
          </div>

          <img
            src="../../public/decoration-2.png"
            class="w-full mt-12 rotate"
          />

          <div class="mt-8">
            <h1
              class="text-center text-4xl mb-4 font-akaya"
              data-aos="zoom-in-up"
              data-aos-duration="1500"
              data-aos-once="true"
            >
              Amplop Digital
            </h1>

            <div
              class="mt-4 p-4 bg-[url('./pattern.jpg')] bg-contain rounded-lg shadow-lg shadow-slate-400"
              data-aos="zoom-in-down"
              data-aos-duration="1500"
              data-aos-once="true"
            >
              <img
                src="../assets/images/logo-bca.png"
                class="w-28 mx-auto mb-6"
                alt=""
              />
              <p class="text-center font-bold">8525320142</p>
              <p class="text-center text-xl">a/n Tuti Hasanah</p>
              <button
              @click="onClickCopyNorek('bca')"
              class=" min-w-[75px] px-4 py-2 bg-[#958277] text-white rounded-2xl hover:opacity-80 focus:outline-none active:outline-none text-base block mx-auto my-2"
            >
             <i class="far fa-copy text-white"></i> {{btnBCA ? 'Berhasil di copy' : 'Copy Text'}}
            </button>

            </div>

            <div
              class="mt-4 p-4 bg-[url('./pattern.jpg')] bg-contain rounded-lg shadow-lg shadow-slate-400"
              data-aos="zoom-in-down"
              data-aos-duration="1500"
              data-aos-once="true"
            >
              <img
                src="../assets/images/logo-bri-preview.png"
                class="w-40 mx-auto mb-6"
                alt=""
              />
              <p class="text-center font-bold">5759-01-009500-53-4</p>
              <p class="text-center text-xl">a/n Soni Putrawan</p>
                <button
              @click="onClickCopyNorek('bri')"
              class=" min-w-[75px] px-4 py-2 bg-[#958277] text-white rounded-2xl hover:opacity-80 focus:outline-none active:outline-none text-base block mx-auto my-2"
            >
             <i class="far fa-copy text-white"></i> {{btnBRI ? 'Berhasil di copy' : 'Copy Text'}}
            </button>
            </div>
            <img
              src="../../public/decoration-2.png"
              class="w-full mt-8 rotate-180"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from "../components/Modal.vue";
import Menu from "../components/Menu.vue";
// import axios from "axios";
import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css";
import Countdown from "@chenfengyuan/vue-countdown";
// import { GoogleMap, Marker } from 'vue3-google-map'

export default {
  name: "Home",
  components: {
    Modal,
    Countdown,
    Menu,
    // GoogleMap,
    // Marker
  },
  data() {
    return {
      show: false,
      modal: true,
      muted: false,
      loading: false,
      undangan: this.$route.params.nama,
      list: [
        "btn-kata-pengantar",
        "btn-mempelai-wanita",
        "btn-mempelai-pria",
        "btn-dday",
        "btn-lokasi",
      ],
      offset: 0,
      limit: 5,
      ucapan: [],
      allUcapanLength: 0,
      // ? Data for Input
      nama: null,
      konfirmasi: null,
      ucap: null,
      btnBCA: false,
      btnBRI: false
      // locationMap: 'https://maps.google.com/maps?q=-3.231483%2C%20103.2052618&t=m&z=16&output=embed&iwloc=near'
      // center: { lat: -3.231483, lng: 103.2052618 }
    };
  },
  methods: {
    clickOpen() {
      this.show = true;
      const audio = document.getElementById("audio");
      audio.play();
    },
    onClickMuted() {
      const audio = document.getElementById("audio");
      this.muted = !this.muted;
      audio.muted = this.muted;
    },
    async onClickKirim() {
      if (!this.nama) {
         Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `Mohon Diisi Nama Anda!`,
        });
        return;
      } else if (!this.konfirmasi) {
          Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `Mohon Dipilih Kehadiran Anda!`,
        });
        return;
      } else if (!this.ucap) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `Ucapan Anda Masih Kosong!`,
        });
        return;
      }
      this.loading = true;
      const temp = await this.kirimUcapan();
      if (temp === 1) {
        this.offset = 0;
        this.allUcapanLength = await this.ucapanLength();
        this.ucapan = await this.loadUcapan();
        this.loading = false;
        Swal.fire({
          icon: "success",
          title: "Yeay!",
          html: `Ucapan & Do'a berhasil dikirim,<br> Terima Kasih`,
        });
      } else {
        this.loading = false;
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `Ucapan gagal dikirim!`,
        });
      }
    },
    async kirimUcapan() {
      // const API_URL = "https://satria-budi.hasura.app/v1/graphql";
      // const API_HEADERS = {
      //   "Content-Type": "application/json",
      //   "x-hasura-admin-secret": "QOcEnAWFOG6YIJW3Z1cE7sOibdW1dMrRaX36hqyWUcVkpdiUdcAMWrvW3LAZpAfX",
      // };

      // const API_QUERY = `
      // mutation MyMutation {
      //   insert_soni_tuti_wedding_ucapan(objects: {konfirmasi: "${this.konfirmasi}", nama: "${this.nama}", ucapan: "${this.ucap}"}) {
      //     affected_rows
      //   }
      // }
      // `;
      // try {
      //   const data = await axios.post(
      //     API_URL,
      //     { query: API_QUERY },
      //     { headers: API_HEADERS }
      //   );
      //   return data.data.data.insert_soni_tuti_wedding_ucapan.affected_rows;
      // } catch (error) {
      //   Swal.fire({
      //     icon: "error",
      //     title: "Oops...",
      //     text: `${error}`,
      //   });
      //   return;
      // }
    },
    async clickNext(number) {
      this.loading = true;
      this.offset = number;
      this.ucapan = await this.loadUcapan();
      this.loading = false;
    },
    async ucapanLength() {
      // const API_URL = "https://satria-budi.hasura.app/v1/graphql";
      // const API_HEADERS = {
      //   "Content-Type": "application/json",
      //   "x-hasura-admin-secret": "QOcEnAWFOG6YIJW3Z1cE7sOibdW1dMrRaX36hqyWUcVkpdiUdcAMWrvW3LAZpAfX",
      // };

      // const API_QUERY = `
      // query MyQuery {
      //   soni_tuti_wedding_ucapan_aggregate {
      //     aggregate {
      //       count
      //     }
      //   }
      // }
      // `;
      // try {
      //   const data = await axios.post(
      //     API_URL,
      //     { query: API_QUERY },
      //     { headers: API_HEADERS }
      //   );
      //   return data.data.data.soni_tuti_wedding_ucapan_aggregate.aggregate
      //     .count;
      // } catch (error) {
      //   Swal.fire({
      //     icon: "error",
      //     title: "Oops...",
      //     text: `${error}`,
      //   });
      //   return;
      // }
      return 0
    },
    async loadUcapan() {
      // const API_URL = "https://satria-budi.hasura.app/v1/graphql";
      // const API_HEADERS = {
      //   "Content-Type": "application/json",
      //   "x-hasura-admin-secret": "QOcEnAWFOG6YIJW3Z1cE7sOibdW1dMrRaX36hqyWUcVkpdiUdcAMWrvW3LAZpAfX",
      // };

      // const API_QUERY = `
      // query MyQuery {
      //   soni_tuti_wedding_ucapan(offset: ${this.offset}, limit: ${this.limit}, order_by: {created_at: desc}) {
      //     ucapan
      //     nama
      //     konfirmasi
      //     id
      //     created_at
      //   }
      // }
      // `;
      // try {
      //   const data = await axios.post(
      //     API_URL,
      //     { query: API_QUERY },
      //     { headers: API_HEADERS }
      //   );
      //   return data.data.data.soni_tuti_wedding_ucapan;
      // } catch (error) {
      //   Swal.fire({
      //     icon: "error",
      //     title: "Oops...",
      //     text: `${error}`,
      //   });
      //   return;
      // }
    },
    onClickCopyNorek(flag) {
      let noRek = ''
      if (flag === 'bca') {
        noRek = '8525320142'
        this.btnBCA = true
      }
      else {
        noRek = '575901009500534'
        this.btnBRI = true
      }

      const mySmartTextarea = document.createElement("textarea");
      mySmartTextarea.innerHTML = noRek;
      document.body.appendChild(mySmartTextarea);

      mySmartTextarea.select();
      document.execCommand("copy");
      mySmartTextarea.remove();
      setTimeout(() => {
        this.btnBRI = false
        this.btnBCA = false
      }, 1500);
    },
  },
  computed: {
    dday() {
      return (
        new Date("June 26, 2022 09:00:00").getTime() - new Date().getTime()
      );
    },
  },
  async created() {
    AOS.init();
    this.loading = true;
    this.ucapan = await this.loadUcapan();
    this.allUcapanLength = await this.ucapanLength();
    this.loading = false;
  },
  // watch: {
  //   modal() {
  //     if (this.modal === false) {
  //       var i = 0;
  //       setInterval(() => {
  //         if (i > 4) {
  //           i = 0;
  //           document.getElementById(this.list[i]).click();
  //           i++;
  //         } else {
  //           document.getElementById(this.list[i]).click();
  //           i++;
  //         }
  //       }, 5000);
  //     }
  //   },
  // },
};
</script>

<style>
@-webkit-keyframes fade-in-top {
  0% {
    -webkit-transform: translateY(-50px);
    transform: translateY(-50px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes fade-in-top {
  0% {
    -webkit-transform: translateY(-50px);
    transform: translateY(-50px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
}
@-webkit-keyframes scale-in-bottom {
  0% {
    -webkit-transform: scale(0);
    transform: scale(0);
    -webkit-transform-origin: 50% 100%;
    transform-origin: 50% 100%;
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-transform-origin: 50% 100%;
    transform-origin: 50% 100%;
    opacity: 1;
  }
}
@keyframes scale-in-bottom {
  0% {
    -webkit-transform: scale(0);
    transform: scale(0);
    -webkit-transform-origin: 50% 100%;
    transform-origin: 50% 100%;
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-transform-origin: 50% 100%;
    transform-origin: 50% 100%;
    opacity: 1;
  }
}
@-webkit-keyframes fade-in-bottom {
  0% {
    -webkit-transform: translateY(50px);
    transform: translateY(50px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes fade-in-bottom {
  0% {
    -webkit-transform: translateY(50px);
    transform: translateY(50px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
}

.snow-bg {
    position: relative;
}
.snow-bg:after {
    content: '';
    display: block;
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    background-image: 
    url(https://library.elementor.com/resources/christmas-snow-effect/s1.png), 
    url(https://library.elementor.com/resources/christmas-snow-effect/s2.png), 
    url(https://library.elementor.com/resources/christmas-snow-effect/s3.png);
    animation: snow 30s linear infinite;
    animation-duration: 30s;
    animation-timing-function: linear;
    animation-delay: 0s;
    animation-iteration-count: infinite;
    animation-direction: normal;
    animation-fill-mode: none;
    animation-play-state: running;
    animation-name: snow;
}
@keyframes snow {
  /* 0% {background-position: 0px 0px, 0px 0px, 0px 0px;}
  50% {background-position: 500px 500px, 100px 200px, -100px 150px;} */
  100% {background-position: 500px 1000px, 200px 400px, -100px 300px;}
}/* End custom CSS */
</style>


