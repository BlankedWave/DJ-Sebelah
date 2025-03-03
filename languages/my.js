module.exports = {
    footer: "Dibangunkan oleh BlankedWave | DJ Sebelah v1.2",
    ping: {
        description: "Semak kependaman bot",
        response: "Menyemak...",
        embed: {
            title: "Kependaman Bot",
            responseTime: "- Masa Respons Bot : **{latency}ms**",
            websocketPing: "- Ping WebSocket : **{ping}ms**",
            uptime: "- Masa Beroperasi : **{uptime}**",
            footer: "Dibangunkan oleh BlankedWave | DJ Sebelah v1.2"
        }
    },
    addsong: {
        embed: {
            playlistNotFound: "Senarai Main Tidak Dijumpai",
            playlistNotFoundDescription: "- Senarai main tidak dijumpai.",
            accessDenied: "Akses Ditolak",
            accessDeniedDescription: "- Anda tidak mempunyai kebenaran untuk menambah lagu ke senarai main ini.",
            songAdded: "Lagu Ditambah",
            songAddedDescription: "- Lagu **{songInput}** telah ditambah ke senarai main **{playlistName}**.",
            error: "Ralat",
            errorDescription: "- Ralat berlaku semasa menambah lagu."
        }
    },
    allplaylists: {
        embed: {
            noPlaylistsFound: "Tiada Senarai Main Dijumpai",
            noPlaylistsFoundDescription: "- Tiada senarai main awam yang tersedia pada masa ini.",
            createdBy: "Dicipta oleh: {userId}",
            serverName: "Pelayan: {serverName}",
            songs: "Lagu: **{songCount}**",
            publicPlaylistsTitle: "Senarai Main Awam (Halaman {currentPage}/{totalPages})",
            error: "Ralat",
            errorDescription: "- Ralat berlaku semasa mendapatkan senarai main."
        }
    },
    autoplay: {
        embed: {
            autoplayUpdated: "Autoplay Dikemas Kini",
            autoplayStatus: "- Autoplay telah **{status}** untuk pelayan ini.",
            enabled: "didayakan",
            disabled: "dilumpuhkan",
            error: "Ralat",
            errorDescription: "- Ralat berlaku semasa mengemas kini autoplay."
        },
        commandDescription: "Dayakan atau lumpuhkan autoplay"
    },
    createplaylist: {
        embed: {
            playlistExists: "Senarai Main Wujud",
            playlistExistsDescription: "- Senarai main dengan nama ini sudah wujud.",
            playlistCreated: "Senarai Main Dicipta",
            playlistCreatedDescription: "- Senarai main **{playlistName}** telah dicipta.\n- Keterlihatan: **{visibility}**.",
            private: "Persendirian",
            public: "Awam",
            error: "Ralat",
            errorDescription: "- Ralat berlaku semasa mencipta senarai main."
        },
        commandDescriptionName: "Masukkan nama senarai main",
        commandDescriptionPrivate: "Tetapkan senarai main sebagai persendirian (hanya kelihatan kepada anda)"
    },
    deleteplaylist: {
        embed: {
            playlistNotFound: "Senarai Main Tidak Dijumpai",
            playlistNotFoundDescription: "- Senarai main tidak dijumpai.",
            accessDenied: "Akses Ditolak",
            accessDeniedDescription: "- Anda tidak mempunyai kebenaran untuk memadam senarai main ini.",
            playlistDeleted: "Senarai Main Dipadam",
            playlistDeletedDescription: "- Senarai main **{playlistName}** telah dipadam.",
            error: "Ralat",
            errorDescription: "- Ralat berlaku semasa memadam senarai main."
        },
        commandDescriptionName: "Masukkan nama senarai main"
    },
    deletesong: {
        embed: {
            playlistNotFound: "Senarai Main Tidak Dijumpai",
            playlistNotFoundDescription: "- Senarai main tidak dijumpai.",
            songDeleted: "Lagu Dipadam",
            songDeletedDescription: "- Lagu **{songName}** telah dipadam daripada senarai main **{playlistName}**.",
            error: "Ralat",
            errorDescription: "- Ralat berlaku semasa memadam lagu."
        },
        commandDescriptionPlaylist: "Masukkan nama senarai main",
        commandDescriptionSong: "Masukkan nama lagu"
    },
    filters: {
        embed: {
            error: "Ralat",
            noPlayer: "- Tiada pemain aktif dijumpai. Sila mainkan lagu dahulu.",
            wrongChannel: "- Anda perlu berada dalam saluran suara yang sama dengan bot untuk menggunakan arahan ini.",
            filtersCleared: "Semua filter telah dibersihkan.",
            invalidFilter: "Filter tidak sah dipilih.",
            filterApplied: "Filter **{filter}** telah digunakan.",
            errorProcessing: "- Ralat berlaku semasa memproses permintaan anda."
        },
        commandDescription: "Pilih filter untuk digunakan"
    },
    help: {
        embed: {
            title: "📜 Menu Bantuan {botName}",
            author: "Bantuan",
            description: `
            **Selamat datang ke {botName}!**

            > Rakan muzik utama anda di Discord.
            > Di bawah adalah maklumat terperinci tentang bot:
                        
            **📂 Arahan:** {totalCommands}
            **🌐 Pelayan:** {totalServers}
            **👥 Pengguna:** {totalUsers}
            **⏳ Masa Beroperasi:** {uptimeString}
            **📡 Ping:** {ping}ms
            `,
            availableCommands: "Arahan yang Tersedia",
            noDescription: "Tiada keterangan tersedia.",
            noCommands: "Tiada arahan dijumpai.",
            error: "❌ Ralat berlaku semasa mendapatkan menu bantuan."
        },
        commandDescription: "Dapatkan maklumat tentang bot"
    },
    myplaylists: {
        embed: {
            noPlaylistsFound: "Tiada Senarai Main Dijumpai",
            noPlaylistsFoundDescription: "- Anda belum mencipta sebarang senarai main.",
            yourPlaylistsTitle: "Senarai Main Anda (Halaman {currentPage}/{totalPages})",
            visibility: "Keterlihatan",
            private: "Persendirian",
            public: "Awam",
            server: "Pelayan",
            songs: "Lagu",
            error: "Ralat",
            errorDescription: "- Ralat berlaku semasa mendapatkan senarai main anda."
        }
    },
    nowPlaying: {
        embed: {
            error: "Ralat",
            noSong: "- Tiada lagu yang sedang dimainkan.",
            nowPlaying: "Sedang Dimainkan!",
            errorDescription: "- Ralat berlaku semasa memproses permintaan anda."
        }
    },
    pause: {
        embed: {
            error: "Ralat",
            noActivePlayer: "- Tiada pemain aktif dijumpai.",
            paused: "Dijeda!",
            pausedDescription: "**- Main balik telah dijeda!**",
            errorDescription: "- Ralat berlaku semasa memproses permintaan anda."
        }
    },
    play: {
        embed: {
            error: "Ralat",
            noVoiceChannel: "- Anda perlu berada dalam saluran suara untuk menggunakan arahan ini.",
            noLavalinkNodes: "- Tiada nod Lavalink yang tersedia untuk memproses permintaan.",
            noResults: "- Tiada hasil dijumpai.",
            requestUpdated: "Permintaan Dikemas Kini!",
            successProcessed: "- Permintaan anda telah berjaya diproses.\n- Sila gunakan butang untuk mengawal main balik",
            errorProcessing: "- Ralat berlaku semasa memproses permintaan anda."
        },
        commandDescription: "Masukkan nama lagu / pautan atau senarai main"
    },
    playCustomPlaylist: {
        embed: {
            error: "Ralat",
            noVoiceChannel: "- Anda perlu berada dalam saluran suara untuk menggunakan arahan ini.",
            playlistNotFound: "- Senarai main tidak dijumpai.",
            accessDenied: "Akses Ditolak",
            noPermission: "- Anda tidak mempunyai kebenaran untuk memainkan senarai main persendirian ini.",
            emptyPlaylist: "- Senarai main kosong.",
            playingPlaylist: "Memainkan Senarai Main!",
            playlistPlaying: "- Senarai main **{playlistName}** sedang dimainkan.\n- Sila gunakan butang untuk mengawal main balik",
            errorResolvingSong: "- Ralat menyelesaikan lagu.",
            errorPlayingPlaylist: "- Ralat berlaku semasa memainkan senarai main."
        },
        commandDescription: "Masukkan nama senarai main"
    },
    queue: {
    embed: {
        queueEmpty: "Senarai Kosong",
        queueEmptyDescription: "- Senarai sedang kosong. Tambah lagu menggunakan arahan `/play`.",
        currentQueue: "Senarai Semasa",
        noMoreSongs: "- Tiada lagi lagu dalam senarai.",
        error: "Ralat",
        errorDescription: "- Ralat berlaku semasa mendapatkan senarai."
    }
},
remove: {
    embed: {
        queueEmpty: "Senarai Kosong",
        queueEmptyDescription: "- Senarai sedang kosong. Tambah lagu menggunakan arahan `/play`.",
        invalidPosition: "Ralat",
        invalidPositionDescription: "- Kedudukan tidak sah. Masukkan nombor antara 1 dan {queueLength}.",
        songRemoved: "Lagu Dibuang",
        songRemovedDescription: "- Lagu dibuang: **{songTitle}** daripada senarai.",
        error: "Ralat",
        errorDescription: "- Ralat berlaku semasa membuang lagu daripada senarai."
    }
},
resume: {
    embed: {
        noActivePlayer: "Ralat",
        noActivePlayerDescription: "- Tiada pemain aktif dijumpai.",
        resumed: "Dimainkan Semula!",
        resumedDescription: "**- Main balik telah dimainkan semula!**",
        error: "Ralat",
        errorDescription: "- Ralat berlaku semasa memproses permintaan anda."
    }
},
showsongs: {
    embed: {
        error: "Ralat",
        playlistNotFound: "- Senarai main tidak dijumpai.",
        accessDenied: "Akses Ditolak",
        noPermission: "- Anda tidak mempunyai kebenaran untuk melihat senarai main persendirian ini.",
        noSongs: "- Tiada lagu dalam senarai main ini.",
        songsInPlaylist: "Lagu dalam {playlistName}",
        songsInPlaylistPage: "Lagu dalam {playlistName} (Halaman {currentPage}/{totalPages})",
        errorDescription: "- Ralat berlaku semasa menunjukkan lagu."
    }
},
shuffle: {
    embed: {
        queueEmpty: "Senarai Kosong",
        queueEmptyDescription: "- Senarai sedang kosong. Tambah lagu menggunakan arahan `/play`.",
        queueShuffled: "Senarai Diacak",
        queueShuffledDescription: "- Senarai telah diacak dengan jayanya.",
        error: "Ralat",
        errorDescription: "- Ralat berlaku semasa mengacak Senarai."
    }
},
skip: {
    embed: {
        noActivePlayer: "Ralat",
        noActivePlayerDescription: "- Tiada pemain aktif dijumpai.",
        songSkipped: "Lagu Dilangkau!",
        songSkippedDescription: "**- Pemain akan memainkan lagu seterusnya!**",
        error: "Ralat",
        errorDescription: "- Ralat berlaku semasa memproses permintaan anda."
    }
},
stop: {
    embed: {
        noActivePlayer: "Ralat",
        noActivePlayerDescription: "- Tiada pemain aktif dijumpai.",
        musicHalted: "Muzik Dihentikan!",
        musicHaltedDescription: "**- Main balik telah dihentikan dan pemain dimusnahkan!**",
        error: "Ralat",
        errorDescription: "- Ralat berlaku semasa memproses permintaan anda."
    }
},
support: {
    embed: {
        authorName: "Pelayan Sokongan",
        description: "➡️ **Sertai pelayan Discord kami untuk sokongan dan kemas kini:**\n- Discord - {supportServerLink}\n\n,
        error: "Ralat",
        errorDescription: "- Ralat berlaku semasa memproses permintaan anda."
    }
},
volume: {
    embed: {
        noActivePlayer: "Ralat",
        noActivePlayerDescription: "- Tiada pemain aktif dijumpai.",
        volumeUpdated: "Kelantangan Dikemas Kini!",
        volumeUpdatedDescription: "- Kelantangan telah ditetapkan kepada **{volume}%**",
        error: "Ralat",
        errorDescription: "Ralat berlaku semasa menetapkan kelantangan."
    },
    volumeRangeError: "Tahap kelantangan mestilah antara 0 dan 100."
},
errors: {
    noPermission: "Anda tidak mempunyai kebenaran untuk menggunakan arahan ini.",
    generalError: "- Ralat: {error}"
}
};
