//Category array
const categories = [
    { id: 1, name: 'Τρόφιμα' },
    { id: 2, name: 'Γαλακτοκομικά - Αλλαντικά' },
    { id: 3, name: 'Ποτά - Αναψυκτικά' },
    { id: 4, name: 'Απορρυπαντικά' },
    { id: 5, name: 'Διάφορα' }
];

//All Products array
const AllProducts = [
    { id: 1, name: '3Α Ρεβύθια Χονδρά Εισαγωγής 500gr', quantity: 0, categoryId: 1, status: 'active' },
    { id: 2, name: 'Ajax Crystal Καθαριστικό Τζάμια Ανταλλακτικό 750ml', quantity: 0, categoryId: 4, status: 'active' },
    { id: 3, name: 'Ajax Υγρό Καθαρισμού Αγριολούλουδα 1L', quantity: 0, categoryId: 4, status: 'active' },
    { id: 4, name: 'Allways Σερβιέτες Ultra Night Jumbo Pack 14τμχ', quantity: 0, categoryId: 5, status: 'active' },
    { id: 5, name: 'Ariel Κάψουλες Πλυντηρίου Ρούχων All in 1 Mountain Spring 45τμχ', quantity: 0, categoryId: 4, status: 'active' },
    { id: 6, name: 'Ariel Κάψουλες Πλυντηρίου Ρούχων All in 1 Alpine 40τμχ', quantity: 0, categoryId: 4, status: 'active' },
    { id: 7, name: 'Bazaar Σακούλες Απορριμάτων Μεγάλες 25τμχ 60L 64cm X 71cm', quantity: 0, categoryId: 5, status: 'active' },
    { id: 8, name: 'Bazaar Χαρτί Υγείας 3φύλλα Αρωματικά 10x117gr', quantity: 0, categoryId: 5, status: 'active' },
    { id: 9, name: 'Becel proactive light', quantity: 0, categoryId: 2, status: 'active' },
    { id: 10, name: 'Brown Rice Cakes Ρυζογκοφρέτες με Αλάτι Ιμαλαϊων 120gr', quantity: 0, categoryId: 1, status: 'active' },   
    { id: 11, name: 'Caotonic σακουλάκι', quantity: 0, categoryId: 5, status: 'active' },
    { id: 12, name: 'Coca Cola Zero Αναψυκτικό 330ml', quantity: 0, categoryId: 3, status: 'active' },
    { id: 13, name: 'Coca Cola Zero κουτάκια εξάδα', quantity: 0, categoryId: 3, status: 'active' },
    { id: 14, name: 'Dimello Forza Καφές Espresso 250g', quantity: 0, categoryId: 3, status: 'active' },
    { id: 15, name: 'Elef Σακούλες Τροφίμων No1 17x24cm 40τμχ', quantity: 0, categoryId: 5, status: 'active' },
    { id: 16, name: 'Fa Αφρόλουτρο Active Energizing 750ml', quantity: 0, categoryId: 5, status: 'disabled' },
    { id: 17, name: 'Fanta Αναψυκτικό Λεμονίτα Sleek 330ml', quantity: 0, categoryId: 3, status: 'disabled' },
    { id: 18, name: 'Farmer Sweet Corn 340gr', quantity: 0, categoryId: 1, status: 'disabled' },
    { id: 19, name: 'Farmer Καστανή Ζάχαρη 1kg', quantity: 0, categoryId: 5, status: 'disabled' },
    { id: 20, name: 'Farmer Σόδα Βάζο 350gr', quantity: 0, categoryId: 5, status: 'disabled' },
    { id: 21, name: 'Rex Σόδα Πλύσεως Turbo Action 500gr', quantity: 0, categoryId: 4, status: 'disabled' },
    { id: 22, name: 'Finish Ταμπλέτες Πλυντηρίου Πιάτων All in 1 Max Λεμόνι 27τμχ', quantity: 0, categoryId: 4, status: 'disabled' },
    { id: 23, name: 'Fitness Bars Choco / Δημητριακά 23,5gr x 6 (+2 free)', quantity: 0, categoryId: 1, status: 'disabled' },
    { id: 24, name: 'Hellmann\'s Real Μαγιονέζα 450ml', quantity: 0, categoryId: 1, status: 'disabled' },
    { id: 25, name: 'Iglo Fish Sticks 10 Τεμάχια 300gr', quantity: 0, categoryId: 1, status: 'disabled' },
    { id: 26, name: 'Kellog\'s Δημητριακά All Bran Flakes Complete 375gr', quantity: 0, categoryId: 1, status: 'disabled' },
    { id: 27, name: 'Kellog\'s All bran fibre plus', quantity: 0, categoryId: 1, status: 'disabled' },
    { id: 28, name: 'Kellog\'s Δημητριακά Special K 375gr', quantity: 0, categoryId: 1, status: 'disabled' },
    { id: 29, name: 'Klinex Ultra Χλωρίνη Λεμόνι 1250ml', quantity: 0, categoryId: 4, status: 'disabled' },
    { id: 30, name: 'Klinex Χλωρίνη Λεμόνι 2Lt', quantity: 0, categoryId: 4, status: 'disabled' },
    { id: 31, name: 'Knorr Κοτόσουπα με φιδέ σακουλάκι', quantity: 0, categoryId: 1, status: 'disabled' },
    { id: 32, name: 'Knorr Μανιταρόσουπα με κρουτόν', quantity: 0, categoryId: 1, status: 'disabled' },
    { id: 33, name: 'Knorr σούπα βοδινού με ζυμαρικά ABC σακουλάκι', quantity: 0, categoryId: 1, status: 'disabled' },
    { id: 34, name: 'Babycare Υγρομάντηλα Χαμομήλι Refill 3x72 τμχ -6,00€', quantity: 0, categoryId: 5, status: 'disabled' },
    { id: 35, name: 'Lindy Μωρομάντηλα Sensitive 64τμχ', quantity: 0, categoryId: 5, status: 'disabled' },
    { id: 36, name: 'Lindy Υγρά Μαντηλάκια Υγείας 42τμχ', quantity: 0, categoryId: 5, status: 'disabled' },
    { id: 37, name: 'Misko Κανελόνια 250gr', quantity: 0, categoryId: 1, status: 'disabled' },
    { id: 38, name: 'Misko Μακαρονάκι Κοφτό 500gr', quantity: 0, categoryId: 1, status: 'disabled' },
    { id: 39, name: 'Mmilk Δέλτα πράσινο 1,5L', quantity: 0, categoryId: 2, status: 'disabled' },
    { id: 40, name: 'Pummaro κλασικό', quantity: 0, categoryId: 1, status: 'disabled' },
    { id: 41, name: 'Quaker νιφάδες βρώμης σε σακούλα 500gr', quantity: 0, categoryId: 1, status: 'disabled' },
    { id: 42, name: 'Remia Caesar Dressing', quantity: 0, categoryId: 1, status: 'disabled' },
    { id: 43, name: 'Remia Salad Cream Dressing 250ml', quantity: 0, categoryId: 1, status: 'disabled' },
    { id: 44, name: 'Rio mare τόνος σε νερό 2 x 160gr', quantity: 0, categoryId: 1, status: 'disabled' },
    { id: 45, name: 'Skip Κάψουλες Πλυντηρίου Ρούχων Spring Fresh 38μεζ 1026g', quantity: 0, categoryId: 4, status: 'disabled' },
    { id: 46, name: 'Sunsweet αποξηραμένα δαμάσκηνα', quantity: 0, categoryId: 1, status: 'disabled' },
    { id: 47, name: 'Syoss Σαμπουάν Colorist για Βαμμένα Μαλλιά 750ml', quantity: 0, categoryId: 5, status: 'disabled' },
    { id: 48, name: 'Αγρόκτημα ελαιόλαδο κλασικό 1LT', quantity: 0, categoryId: 1, status: 'disabled' },
    { id: 49, name: 'Αγρόκτημα ελαιόλαδο κλασικό 4LT', quantity: 0, categoryId: 1, status: 'disabled' },
    { id: 50, name: 'Αγρόκτημα Εξαιρετικό Παρθένο Ελαιόλαδο 1LT', quantity: 0, categoryId: 1, status: 'disabled' },
    { id: 51, name: 'Αγρόκτημα Εξαιρετικό Παρθένο Ελαιόλαδο 4LT', quantity: 0, categoryId: 1, status: 'disabled' },
    { id: 52, name: 'Αλάτι Κάλλας 400gr', quantity: 0, categoryId: 5, status: 'disabled' },
    { id: 53, name: 'Αλουμινόχαρτο select bazaar decor', quantity: 0, categoryId: 5, status: 'disabled' },
    { id: 54, name: 'Αντικολλητικό χαρτί select bazaar 8m', quantity: 0, categoryId: 5, status: 'disabled' },
    { id: 55, name: 'Αρακάς λαδερός Μπάρμπα Στάθη', quantity: 0, categoryId: 1, status: 'disabled' },
    { id: 56, name: 'Γιώτης Κορν Φλάουρ 200gr -0,20€', quantity: 0, categoryId: 1, status: 'disabled' },
    { id: 57, name: 'Γραβιέρα Νάξου 250 γραμμάρια κομμάτι', quantity: 0, categoryId: 2, status: 'disabled' },
    { id: 58, name: 'Γραβιέρα Νάξου 500 γραμμάρια κομμάτι', quantity: 0, categoryId: 2, status: 'disabled' },
    { id: 59, name: 'Δάφνη Εύριπος 10gr', quantity: 0, categoryId: 1, status: 'disabled' },
    { id: 60, name: 'Δέλτα Του Τόπου μας Γάλα Ελαφρύ Υψηλής Παστερίωσης 1LT', quantity: 0, categoryId: 2, status: 'disabled' },
    { id: 61, name: 'Δέλτα Του Τόπου μας Σοκολατούχο Γάλα 500ml', quantity: 0, categoryId: 2, status: 'disabled' },
    { id: 62, name: 'Εδέμ Γλυκό Καλαμπόκι 340gr', quantity: 0, categoryId: 1, status: 'disabled' },
    { id: 63, name: 'Ήλιος Κάρυ 30gr', quantity: 0, categoryId: 5, status: 'disabled' },
    { id: 64, name: 'Ήλιος πιπέρι τριμμένο σακουλάκι 50gr', quantity: 0, categoryId: 5, status: 'disabled' },
    { id: 65, name: 'Ήλιος Σκόρδο τριμμένο 50gr', quantity: 0, categoryId: 5, status: 'disabled' },
    { id: 66, name: 'Ήλιος Σόδα Βάζο 350gr', quantity: 0, categoryId: 5, status: 'disabled' },
    { id: 67, name: 'ION σοκολάτες γάλακτος', quantity: 0, categoryId: 1, status: 'disabled' },
    { id: 68, name: 'Καλημέρα Τσουρέκι Πολίτικο Με Μαστίχα Χίου 480gr', quantity: 0, categoryId: 1, status: 'disabled' },
    { id: 69, name: 'ΚΑΝΑΚΗ Λουκανικοπιτάκια Κουρού Κατεψυγμένα 800gr', quantity: 0, categoryId: 1, status: 'disabled' },
    { id: 70, name: 'Κάπαρη Xenia βαζάκι', quantity: 0, categoryId: 5, status: 'disabled' },
    { id: 71, name: 'Καραμολέγκος Ψίχα Τοστ Ψωμί Σταρένιο 480gr', quantity: 0, categoryId: 1, status: 'disabled' },
    { id: 72, name: 'Καραμολέγκος ψωμάκια σάντουιτς (5+1)', quantity: 0, categoryId: 1, status: 'disabled' },
    { id: 73, name: 'Καραμολέγκος Ψωμάκια Χάμπουργκερ 5τμχ + 1 Δώρο 480g', quantity: 0, categoryId: 1, status: 'disabled' },
    { id: 74, name: 'Καραμολέγκος Ψωμί Τοστ Μισό Μισό Σταρένιο & Ολικής Άλεσης 720gr', quantity: 0, categoryId: 1, status: 'disabled' },
    { id: 75, name: 'Καφές Bravo μεσαία συσκευασία', quantity: 0, categoryId: 5, status: 'disabled' },
    { id: 76, name: 'Κέτσαπ HELLMANN\'s Classic Squeeze', quantity: 0, categoryId: 1, status: 'disabled' },
    { id: 77, name: 'Κεφαλογραβιέρα Αμφιλοχίας 350 γραμμάρια κομμάτι', quantity: 0, categoryId: 2, status: 'disabled' },
    { id: 78, name: 'Allday Μαλακτικό Ρούχων Άνοιξη 2lt', quantity: 0, categoryId: 4, status: 'disabled' },
    // Second page
    { id: 79, name: 'Κύκνος Τομάτα Στον Τρίφτη 500g (ΤΟΜΑΤΕΣ ΤΡΙΜΜΕΝΕΣ)', quantity: 0, categoryId: 1, status: 'disabled' },
    { id: 80, name: 'Λεμονίτες LUX', quantity: 0, categoryId: 3, status: 'disabled' },
    { id: 81, name: 'Μακαρόνια Misko no.2', quantity: 0, categoryId: 1, status: 'disabled' },
    { id: 82, name: 'Μακαρόνια σπαγγέτι Misko ολικής άλεσης', quantity: 0, categoryId: 1, status: 'disabled' },
    { id: 83, name: 'Μακεδονικό Ταχίνι με Κακάο 350gr', quantity: 0, categoryId: 1, status: 'disabled' },
    { id: 84, name: 'Μάννα Κριθαροκουλούρα κομμένη 600gr', quantity: 0, categoryId: 1, status: 'disabled' },
    { id: 85, name: 'Μέλισσα Κριθαράκι Μέτριο 500gr', quantity: 0, categoryId: 1, status: 'disabled' },
    { id: 86, name: 'Μπάρμπα Στάθη φασολάκι στρογγυλό 1kg (+200gr δώρο)', quantity: 0, categoryId: 1, status: 'disabled' },
    { id: 87, name: 'Μπισκότα γεμιστά Παπαδοπούλου κακάο', quantity: 0, categoryId: 1, status: 'disabled' },
    { id: 88, name: 'Νερό απιονισμένο για σίδερο (χωρίς άρωμα)', quantity: 0, categoryId: 5, status: 'disabled' },
    { id: 89, name: 'Νίκας Λουκάνικα Φρανκφούρτης Χωρίς Γλουτένη 280gr', quantity: 0, categoryId: 1, status: 'disabled' },
    { id: 90, name: 'Νουνού Κρέμα Γάλακτος Light 3x200ml (2+1 δώρο)', quantity: 0, categoryId: 2, status: 'disabled' },
    { id: 91, name: 'Ξύδι Τοπ κλασικό', quantity: 0, categoryId: 5, status: 'disabled' },
    { id: 92, name: 'Οδοντόκρεμα Aim White Now', quantity: 0, categoryId: 5, status: 'disabled' },
    { id: 93, name: 'Παπαδοπούλου Γεύση 2 Ψωμί Τοστ Ολικής Άλεσης 350gr', quantity: 0, categoryId: 1, status: 'disabled' },
    { id: 94, name: 'Παπαδοπούλου Φρυγανιές Χωριάτικες 240gr', quantity: 0, categoryId: 1, status: 'disabled' },
    { id: 95, name: 'Παριζάκι Υφαντής 330gr', quantity: 0, categoryId: 1, status: 'disabled' },
    { id: 96, name: 'Πέννες ολικής άλεσης Μέλισσα 500gr', quantity: 0, categoryId: 1, status: 'disabled' },
    { id: 97, name: 'Ρεγκάτο Kerrygold 250 γραμμάρια κομμάτι', quantity: 0, categoryId: 2, status: 'disabled' },
    { id: 98, name: 'Ρεγκάτο Kerrygold 250 γραμμάρια τριμμένο', quantity: 0, categoryId: 2, status: 'disabled' },
    { id: 99, name: 'Ρεγκάτο Kerrygold 500 γραμμάρια κομμάτι', quantity: 0, categoryId: 2, status: 'disabled' },
    { id: 100, name: 'Ρίγανη Εύριπος 50gr', quantity: 0, categoryId: 5, status: 'disabled' },
    { id: 101, name: 'Ρύζι agrino parboiled bella για σπυρωτό πιλάφι', quantity: 0, categoryId: 1, status: 'disabled' },
    { id: 102, name: 'Ρύζι Agrino Καρολίνα', quantity: 0, categoryId: 1, status: 'disabled' },
    { id: 103, name: 'Σαμπουάν fructies για κανονικά μαλλιά', quantity: 0, categoryId: 5, status: 'disabled' },
    { id: 104, name: 'Σαμπουάν Head & Shoulders για κανονικά μαλλιά (CLASSIC CLEAN)', quantity: 0, categoryId: 5, status: 'disabled' },
    { id: 105, name: 'Σερβιετάκια Always dailies large (34+18)', quantity: 0, categoryId: 5, status: 'disabled' },
    { id: 106, name: 'Σπαγγέτι ολικής άλεσης Melissa', quantity: 0, categoryId: 1, status: 'disabled' },
    { id: 107, name: 'Σταφιδοψωμακια Στεργίου (με περιθώριο στην ημ. Λήξης)', quantity: 0, categoryId: 1, status: 'disabled' },
    { id: 108, name: 'Στεργίου Κρουασανάκια βουτύρου 260gr', quantity: 0, categoryId: 1, status: 'disabled' },
    { id: 109, name: 'Τυρί παρμεζάνα σκληρή τριμμένο 200gr', quantity: 0, categoryId: 2, status: 'disabled' },
    { id: 110, name: 'Τυροπιτάκια τρίγωνα με κατίκι Δομοκού', quantity: 0, categoryId: 1, status: 'disabled' },
    { id: 111, name: 'Φακές ψιλές 3Α', quantity: 0, categoryId: 1, status: 'disabled' },
    { id: 112, name: 'Φαρίνα Γιώτης', quantity: 0, categoryId: 1, status: 'disabled' },
    { id: 113, name: 'Φασόλια 3Α μέτρια', quantity: 0, categoryId: 1, status: 'disabled' },
    { id: 114, name: 'Φέτα Βυτίνας ή Λάρισας (σκληρή) 500gr', quantity: 0, categoryId: 2, status: 'disabled' },
    { id: 115, name: 'Φέτα Βυτίνας ή Λάρισας (σκληρή) 1kg', quantity: 0, categoryId: 2, status: 'disabled' },
    { id: 116, name: 'Φέτα Βυτίνας ή Λάρισας (σκληρή) 750gr', quantity: 0, categoryId: 2, status: 'disabled' },
    { id: 117, name: 'Φέτες Dirollo Classic Ημίσκληρο 16% Λιπαρά (20 φέτες)', quantity: 0, categoryId: 2, status: 'disabled' },
    { id: 118, name: 'Φέτες Dirollo Classic Ημίσκληρο 16% Λιπαρά (30 φέτες)', quantity: 0, categoryId: 2, status: 'disabled' },
    { id: 119, name: 'Φέτες γαλοπούλα καπνιστή Υφαντής (10 φέτες)', quantity: 0, categoryId: 2, status: 'disabled' },
    { id: 120, name: 'Φέτες γαλοπούλα καπνιστή Υφαντής (15 φέτες)', quantity: 0, categoryId: 2, status: 'disabled' },
    { id: 121, name: 'Φέτες γαλοπούλα καπνιστή Υφαντής (20 φέτες)', quantity: 0, categoryId: 2, status: 'disabled' },
    { id: 122, name: 'Φέτες γαλοπούλα καπνιστή Υφαντής (25 φέτες)', quantity: 0, categoryId: 2, status: 'disabled' },
    { id: 123, name: 'Φέτες γαλοπούλα καπνιστή Υφαντής (30 φέτες)', quantity: 0, categoryId: 2, status: 'disabled' },
    { id: 124, name: 'Φέτες τοστ ΔΕΚΑ χωριάτικο πορτοκαλί μεγάλο', quantity: 0, categoryId: 1, status: 'disabled' },
    { id: 125, name: 'Φέτες τυρί τοστ Φίνα (10 φέτες)', quantity: 0, categoryId: 2, status: 'disabled' },
    { id: 126, name: 'Φέτες τυρί τοστ Φίνα (20 φέτες)', quantity: 0, categoryId: 2, status: 'disabled' },
    { id: 127, name: 'Φέτες τυρί τοστ Φίνα (25 φέτες)', quantity: 0, categoryId: 2, status: 'disabled' },
    { id: 128, name: 'Φέτες τυρί τοστ Φίνα (30 φέτες)', quantity: 0, categoryId: 2, status: 'disabled' },
    { id: 129, name: 'Ροδούλα Πατσαβουρόπιτα Κρήτης 900gr', quantity: 0, categoryId: 1, status: 'disabled' },
    { id: 130, name: 'Φουρνιστή σπανακόπιτα με φέτα (900gr)', quantity: 0, categoryId: 1, status: 'disabled' },
    { id: 131, name: 'Φύλλο ΚΙΧΙ χωριάτικο', quantity: 0, categoryId: 1, status: 'disabled' },
    { id: 132, name: 'Χαρτί κουζίνας select bazaar decor διπλό', quantity: 0, categoryId: 5, status: 'disabled' },
    { id: 133, name: 'Χαρτοπετσέτες Select Bazaar Λευκές 33x33', quantity: 0, categoryId: 5, status: 'disabled' },
    { id: 134, name: 'Χρυσή Ζύμη Κουρού Τυροπιτάκια 920gr', quantity: 0, categoryId: 1, status: 'disabled' },
    { id: 135, name: 'ΧΡΥΣΗ ΖΥΜΗ Πίτσα Σπέσιαλ (2 Χ 550)', quantity: 0, categoryId: 1, status: 'disabled' },
    { id: 136, name: 'Χυμός Όλυμπος Καρότο Μήλο Πορτοκάλι 1Lt', quantity: 0, categoryId: 1, status: 'disabled' },
    { id: 137, name: 'Χυμός ΟΛΥΜΠΟΣ Φυσικός 9 φρούτα 1Lt', quantity: 0, categoryId: 1, status: 'disabled' },
    { id: 138, name: 'Χυμός ΟΛΥΜΠΟΣ φυσικός πορτοκάλι 1Lt', quantity: 0, categoryId: 1, status: 'disabled' },
    { id: 139, name: 'Χυμός ΟΛΥΜΠΟΣ Φυσικός ροδάκινο μήλο 1Lt', quantity: 0, categoryId: 1, status: 'disabled' },
    { id: 140, name: 'Χυμός ΟΛΥΜΠΟΣ Φυσικός ρόδι σταφύλι 1Lt', quantity: 0, categoryId: 1, status: 'disabled' },
    { id: 141, name: 'Ωμέγα Ξύδι από Λευκό Κρασί 6 βαθμοί 4Lt', quantity: 0, categoryId: 5, status: 'disabled' },
    { id: 142, name: 'Κασέρι ΚΟΛΙΟΣ LIGHT κομμάτι 250 gr', quantity: 0, categoryId: 2, status: 'disabled' },
    { id: 143, name: 'Γιώτης Μπέικιν Πάουντερ 3x 20gr (2+1 Δώρο)', quantity: 0, categoryId: 1, status: 'disabled' },
    { id: 144, name: 'Χρυσά Αυγά Ημέρας Large 6τμχ', quantity: 0, categoryId: 1, status: 'disabled' },
    { id: 145, name: 'Dole Μπανάνες Εκουαδόρ 500gr - 3τμχ', quantity: 0, categoryId: 1, status: 'disabled' },
    { id: 146, name: 'Μήλα Στάρκιν Νάουσας 500gr - 2τμχ', quantity: 0, categoryId: 1, status: 'disabled' },
    { id: 147, name: 'Πατάτες Ηλείας El Mundo σε δίχτυ 3Kg', quantity: 0, categoryId: 1, status: 'disabled' },
    { id: 148, name: 'Δίρφυς Εμφιαλωμένο Νερό 12x500ml', quantity: 0, categoryId: 5, status: 'disabled' },
    { id: 149, name: 'Αλλατίνη Αλεύρι Για Όλες Τις Χρήσεις 1kg -0,30€', quantity: 0, categoryId: 1, status: 'disabled' },
    { id: 150, name: 'Κανέλα', quantity: 0, categoryId: 5, status: 'disabled' },
    { id: 151, name: 'Μπύρες', quantity: 0, categoryId: 3, status: 'disabled' }
];

// Check if the AllProducts array exists in localStorage
let AllProductsArray = JSON.parse(localStorage.getItem('AllProducts'));

// If AllProducts is null or undefined, initialize it with the products from the constant
if (!AllProductsArray) {
    AllProductsArray = [...AllProducts];
    localStorage.setItem('AllProducts', JSON.stringify(AllProducts));
}

// Initializing cartItems array from localStorage, or set it to an empty array
let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

// Function that creates the categories and displays them
function displayCategories() {
    const categoryList = document.getElementById('category-list');

    // Clearing existing content
    categoryList.innerHTML = '';

    // Loop through categories and create buttons
    categories.forEach(category => {
        const button = document.createElement('button');
        button.innerText = category.name;
        button.addEventListener('click', () => filterProducts(category.id));
        categoryList.appendChild(button);
    });
}

// Function to retrieve the quantity of a specific product from the cart
function getProductQuantity(productId) {
    const selectedProduct = cartItems.find(item => item.id === productId);
    return selectedProduct ? selectedProduct.quantity : 0;
}

// Function to handle category focus
function handleCategoryFocus(event) {
    const clickedButton = event.target;
    const footer = document.querySelector('footer');

    // Check if a category button was clicked
    if (clickedButton.tagName === 'BUTTON') {
        const categoryId = parseInt(clickedButton.dataset.categoryId);

        // Hiding the footer when a category is pressed so it doesn bother the overflow
        // Transition so the footer fades out
        footer.style.transition = 'opacity 0.7s';

        // Starting the fade-out animation
        footer.style.opacity = '0';

        // Fade out animation with timeout
        setTimeout(() => {
            footer.style.display = 'none';
        }, 500);

        // // Filter and display products by category
        // filterProducts(categoryId);

        // Add 'selected' class to the clicked category button
        const categoryButtons = document.querySelectorAll('#category-list button');
        categoryButtons.forEach(button => {
        if (button === clickedButton) {
            button.classList.add('selected');
        } else {
            button.classList.remove('selected');
        }
        });
    }
}

// Add event listener to the category list container so I can declare which one to focus
const categoryList = document.getElementById('category-list');
categoryList.addEventListener('click', handleCategoryFocus);

// Function to filter and display products by category
function filterProducts(categoryId) {
    const productList = document.getElementById('product-list');

    // Clearing existing content
    productList.innerHTML = '';

    // Checking if AllProducts array is empty in localStorage
    const currentlyAllProducts = JSON.parse(localStorage.getItem('AllProducts'));

    if (currentlyAllProducts && currentlyAllProducts.length > 0) {
        // Filtering products by category and status 'active'
        const filteredProducts = currentlyAllProducts.filter(product => product.categoryId === categoryId && product.status === 'active');

        // Loop through filtered products and create HTML elements
        filteredProducts.forEach(product => {
            const item = document.createElement('div');
            item.innerHTML = `
                <div class="product-container">
                    <h3>${product.name} 
                        <button class="quantityBtnRemove" onclick="removeFromCart(${product.id})">-</button>
                        <span class="quantityCounter" id="quantity-${product.id}">${getProductQuantity(product.id)}</span> 
                        <button class="quantityBtnAdd" onclick="addToCart(${product.id})">+</button>
                    </h3>
                </div>
            `;
            productList.appendChild(item);
        });
    } else {
        // Filtering products from the AllProducts constant by category and status 'active'
        const filteredProducts = AllProducts.filter(product => product.categoryId === categoryId && product.status === 'active');

        // Loop through filtered products and create HTML elements
        filteredProducts.forEach(product => {
            const item = document.createElement('div');
            item.innerHTML = `
                <div class="product-container">
                    <h3>${product.name} 
                        <button class="quantityBtnRemove" onclick="removeFromCart(${product.id})">-</button>
                        <span class="quantityCounter" id="quantity-${product.id}">${getProductQuantity(product.id)}</span> 
                        <button class="quantityBtnAdd" onclick="addToCart(${product.id})">+</button>
                    </h3>
                </div>
            `;
            productList.appendChild(item);
        });
    }
}

// Function to add a product to the cart
function addToCart(productId) {
    const selectedProduct = AllProducts.find(product => product.id === productId);

    // Checking if the product is already in the cart
    const existingCartItem = cartItems.find(item => item.id === selectedProduct.id);

    if (!existingCartItem) {
        // If the product does not exist in the cart, add it with a quantity of 1
        cartItems.push({ ...selectedProduct, quantity: 1 });

        showNotification(`${selectedProduct.name} added to the cart.`, true);

        //Adding the shake-animation class to the shopping cart
        const cartSection = document.getElementById('my-cart');
        cartSection.classList.add('CartShake-animation');

        //Removing the shake-animation class after 0.4seconds
        setTimeout(() => {
            cartSection.classList.remove('CartShake-animation');
        }, 800);
    } else {
        // If the product already exists in the cart, increase its quantity by 1
        existingCartItem.quantity++;
    }

    // Saving the updated cartItems array to localStorage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    // Updating the quantity displayed in the HTML
    const quantityElement = document.getElementById(`quantity-${productId}`);
    if (quantityElement) {
        quantityElement.textContent = getProductQuantity(productId);
    }

    // Updating cart count
    UpdateCartCount();
}

// Function to remove a product from the cart
function removeFromCart(productId) {
    const existingCartItem = cartItems.find(item => item.id === productId);

    if (existingCartItem) {
        // Decrease the quantity by 1
        existingCartItem.quantity--;

        if (existingCartItem.quantity === 0) {
            // If the quantity reaches 0, remove the product from the cart
            cartItems = cartItems.filter(item => item.id !== productId);

            const selectedProduct = AllProducts.find(product => product.id === productId);
            showNotification(`${selectedProduct.name} removed from the cart.`, false);

            //Adding the shake-animation class to the shopping cart
            const cartSection = document.getElementById('my-cart');
            cartSection.classList.add('CartShake-animation');

            //Removing the shake-animation class after 0.4seconds
            setTimeout(() => {
                cartSection.classList.remove('CartShake-animation');
            }, 800);
        }
    }

    // Saving the updated cartItems array to localStorage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    // Updating the quantity displayed in the HTML
    const quantityElement = document.getElementById(`quantity-${productId}`);
    if (quantityElement) {
        quantityElement.textContent = getProductQuantity(productId);
    }

    // Updating cart count
    UpdateCartCount();
}

// Function to show notification
function showNotification(message, isAdd) {
    const notificationElement = document.getElementById('notification');

    // Creating a new span element for the notification
    const notification = document.createElement('span');
    notification.textContent = message;

    // Adding success or failure class based on success parameter
    if (isAdd) {
        notification.classList.add('added');
        notification.innerHTML = '&#10004; ' + notification.innerHTML; // Add ✔ symbol
    } else {
        notification.classList.add('removed');
        notification.innerHTML = '&#10008; ' + notification.innerHTML; // Add ❌ symbol
    }


    // Appending the notification to the notification element
    notificationElement.appendChild(notification);

    // Automatically remove the notification after 3 seconds
    setTimeout(() => {
        notification.remove();
    }, 3500);
}

// Function to view the cart page
function viewCart() {
    window.location.href = '/src/html_extensions/my-cart.html';
}

// Function that user can select the active products
function viewActiveProducts() {
    window.location.href = '/src/html_extensions/active-products.html';
}

// Function to redirect to the main page if the user is on the my-cart page
function redirectToMainPage() {
    window.location.href = '../../index.html';
}

// Function to clear cart
function clearCart() {
    localStorage.removeItem('cartItems');
    cartItems = [];
    location.reload();
}

// Function to update the cart-count
function UpdateCartCount() {
    const cartCountElement = document.getElementById('cart-count');

    if(cartCountElement) {
        const totalProudcts = cartItems.length;
        cartCountElement.textContent = totalProudcts;
    }
}

// Displaying the categories
displayCategories();

// Updating cart count
UpdateCartCount();
