


function hesabla() {
            const məbləq = parseInt(document.getElementById("məbləqInput").value);
            const manatBanknotları = [200, 100, 50, 20, 10, 5, 1];
            const şəkillər = {
              200: "https://upload.wikimedia.org/wikipedia/commons/9/9c/200_Azerbaijani_manat_in_2018_Obverse.jpg",
              100: "https://upload.wikimedia.org/wikipedia/commons/e/ef/100_manat_obv.jpg",
              50: "https://upload.wikimedia.org/wikipedia/commons/a/a0/50-manat_front.jpg",
              20: "https://qafqazinfo.az/uploads/1638971407/20manatt.jpg",
              10: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/10_manat_rev.jpg/250px-10_manat_rev.jpg",
              5: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/5manat09a.jpg/640px-5manat09a.jpg ",
              1: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/1_manat_-_2020_-_obv.jpg/300px-1_manat_-_2020_-_obv.jpg "
          };
            

            const şəkillərListesi = document.getElementById("şəkillərListesi");
            şəkillərListesi.innerHTML = "";
            for (const banknot in şəkillər) {
                if (məbləq >= banknot) {
                    const n = Math.floor(məbləq / banknot);
                    const imageURL = şəkillər[banknot];
                    for (let i = 0; i < n; i++) {
                        const listItem = document.createElement("li");
                        const imageElement = document.createElement("img");
                        imageElement.src = imageURL;
                        imageElement.alt = `${banknot} AZN`;
                        listItem.appendChild(imageElement);
                        şəkillərListesi.appendChild(listItem);
                    }
                    məbləq %= banknot;
                }
            }
        }