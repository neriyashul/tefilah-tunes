import DBGateway from "../db/db-gateway";
import { useQuery } from "react-query";
import { useState } from "react";

const sections = [
    {
        id: "1",
        name: `לכו נרננה`,
        // name: `מזמור צ"ה`,
        text: `לְכוּ נְרַנְּנָה לַה' נָרִיעָה לְצוּר יִשְׁעֵנוּ: נְקַדְּמָה פָנָיו בְּתוֹדָה בִּזְמִרוֹת נָרִיעַ לוֹ: כִּי אֵל גָּדוֹל ה' וּמֶלֶךְ גָּדוֹל עַל כָּל אֱלֹהִים: אֲשֶׁר בְּיָדוֹ מֶחְקְרֵי אָרֶץ וְתוֹעֲפוֹת הָרִים לוֹ: אֲשֶׁר לוֹ הַיָּם וְהוּא עָשָׂהוּ וְיַבֶּשֶׁת יָדָיו יָצָרוּ: בֹּאוֹ נִשְׁתַּחֲוֶה וְנִכְרָעָה נִבְרְכָה לִפְנֵי ה' עֹשֵׂנוּ: כִּי הוּא אֱלֹהֵינוּ וַאֲנַחְנוּ עַם מַרְעִיתוֹ וְצֹאן יָדוֹ הַיּוֹם אִם בְּקֹלוֹ תִשְׁמָעוּ: אַל תַּקְשׁוּ לְבַבְכֶם כִּמְרִיבָה כְּיוֹם מַסָּה בַּמִּדְבָּר: אֲשֶׁר נִסּוּנִי אֲבוֹתֵיכֶם בְּחָנוּנִי גַּם רָאוּ פָעֳלִי: אַרְבָּעִים שָׁנָה אָקוּט בְּדוֹר וָאֹמַר עַם תֹּעֵי לֵבָב הֵם וְהֵם לֹא יָדְעוּ דְרָכָי: אֲשֶׁר נִשְׁבַּעְתִּי בְאַפִּי אִם יְבֹאוֹן אֶל מְנוּחָתִי:`,
        subsections: [
            {
                id: "1",
                name: "לכו נרננה",
            },
            {
                id: "2",
                name: "ארבעים שנה",
            },
        ],
    },
    {
        id: "2",
        name: `שירו לה'`,
        // name: `מזמור צ"ו`,
        text: `שִׁירוּ לַה' שִׁיר חָדָשׁ שִׁירוּ לַה' כָּל הָאָרֶץ: שִׁירוּ לַה' בָּרֲכוּ שְׁמוֹ בַּשְּׂרוּ מִיּוֹם לְיוֹם יְשׁוּעָתוֹ: סַפְּרוּ בַגּוֹיִם כְּבוֹדוֹ בְּכָל הָעַמִּים נִפְלְאוֹתָיו: כִּי גָדוֹל ה' וּמְהֻלָּל מְאֹד נוֹרָא הוּא עַל כָּל אֱלֹהִים: כִּי כָּל אֱלֹהֵי הָעַמִּים אֱלִילִים וַה' שָׁמַיִם עָשָׂה: הוֹד וְהָדָר לְפָנָיו עֹז וְתִפְאֶרֶת בְּמִקְדָּשׁוֹ: הָבוּ לַה' מִשְׁפְּחוֹת עַמִּים הָבוּ לַה' כָּבוֹד וָעֹז: הָבוּ לַה' כְּבוֹד שְׁמוֹ שְׂאוּ מִנְחָה וּבֹאוּ לְחַצְרוֹתָיו: הִשְׁתַּחֲווּ לַה' בְּהַדְרַת קֹדֶשׁ חִילוּ מִפָּנָיו כָּל הָאָרֶץ: אִמְרוּ בַגּוֹיִם ה' מָלָךְ אַף תִּכּוֹן תֵּבֵל בַּל תִּמּוֹט יָדִין עַמִּים בְּמֵישָׁרִים: יִשְׂמְחוּ הַשָּׁמַיִם וְתָגֵל הָאָרֶץ יִרְעַם הַיָּם וּמְלֹאוֹ: יַעֲלֹז שָׂדַי וְכָל אֲשֶׁר בּוֹ אָז יְרַנְּנוּ כָּל עֲצֵי יָעַר: לִפְנֵי ה' כִּי בָא כִּי בָא לִשְׁפֹּט הָאָרֶץ יִשְׁפֹּט תֵּבֵל בְּצֶדֶק וְעַמִּים בֶּאֱמוּנָתוֹ:`,
        subsections: [
            {
                id: "3",
                name: "שירו לה' שיר חדש",
            },
            {
                id: "4",
                name: "ישמחו השמים ותגל הארץ",
            },
        ],
    },
    {
        id: "3",
        name: `ה' מלך תגל הארץ`,
        // name: `מזמור צ"ז`,
        text: `ה' מָלָךְ תָּגֵל הָאָרֶץ יִשְׂמְחוּ אִיִּים רַבִּים: עָנָן וַעֲרָפֶל סְבִיבָיו צֶדֶק וּמִשְׁפָּט מְכוֹן כִּסְאוֹ: אֵשׁ לְפָנָיו תֵּלֵךְ וּתְלַהֵט סָבִיב צָרָיו: הֵאִירוּ בְרָקָיו תֵּבֵל רָאֲתָה וַתָּחֵל הָאָרֶץ: הָרִים כַּדּוֹנַג נָמַסּוּ מִלִּפְנֵי ה' מִלִּפְנֵי אֲדוֹן כָּל הָאָרֶץ: הִגִּידוּ הַשָּׁמַיִם צִדְקוֹ וְרָאוּ כָל הָעַמִּים כְּבוֹדוֹ: יֵבֹשׁוּ כָּל עֹבְדֵי פֶסֶל הַמִּתְהַלְלִים בָּאֱלִילִים הִשְׁתַּחֲווּ לוֹ כָּל אֱלֹהִים: שָׁמְעָה וַתִּשְׂמַח צִיּוֹן וַתָּגֵלְנָה בְּנוֹת יְהוּדָה לְמַעַן מִשְׁפָּטֶיךָ ה': כִּי אַתָּה ה' עֶלְיוֹן עַל כָּל הָאָרֶץ מְאֹד נַעֲלֵיתָ עַל כָּל אֱלֹהִים: אֹהֲבֵי ה' שִׂנְאוּ רָע שֹׁמֵר נַפְשׁוֹת חֲסִידָיו מִיַּד רְשָׁעִים יַצִּילֵם: אוֹר זָרֻעַ לַצַּדִּיק וּלְיִשְׁרֵי לֵב שִׂמְחָה: שִׂמְחוּ צַדִּיקִים בַּה' וְהוֹדוּ לְזֵכֶר קָדְשׁוֹ:`,
        subsections: [
            {
                id: "5",
                name: "שמעה ותשמח ציון",
            },
            {
                id: "6",
                name: "כי אתה ה' עליון",
            },
        ],
    },
    {
        id: "4",
        name: `מזמור שירו לה' שיר חדש`,
        // name: `מזמור צ"ח`,
        text: `מִזְמוֹר שִׁירוּ לַה' שִׁיר חָדָשׁ כִּי נִפְלָאוֹת עָשָׂה הוֹשִׁיעָה לוֹ יְמִינוֹ וּזְרוֹעַ קָדְשׁוֹ: הוֹדִיעַ ה' יְשׁוּעָתוֹ לְעֵינֵי הַגּוֹיִם גִּלָּה צִדְקָתוֹ: זָכַר חַסְדּוֹ וֶאֱמוּנָתוֹ לְבֵית יִשְׂרָאֵל רָאוּ כָל אַפְסֵי אָרֶץ אֵת יְשׁוּעַת אֱלֹהֵינוּ: הָרִיעוּ לַה' כָּל הָאָרֶץ פִּצְחוּ וְרַנְּנוּ וְזַמֵּרוּ: זַמְּרוּ לַה' בְּכִנּוֹר בְּכִנּוֹר וְקוֹל זִמְרָה: בַּחֲצֹצְרוֹת וְקוֹל שׁוֹפָר הָרִיעוּ לִפְנֵי הַמֶּלֶךְ ה': יִרְעַם הַיָּם וּמְלֹאוֹ תֵּבֵל וְיֹשְׁבֵי בָהּ: נְהָרוֹת יִמְחֲאוּ כָף יַחַד הָרִים יְרַנֵּנוּ: לִפְנֵי ה' כִּי בָא לִשְׁפֹּט הָאָרֶץ יִשְׁפֹּט תֵּבֵל בְּצֶדֶק וְעַמִּים בְּמֵישָׁרִים:`,
        subsections: [
            {
                id: "7",
                name: "שירו לה' שיר חדש",
            },
            {
                id: "8",
                name: "בחצצרות וקול שופר",
            },
        ],
    },
    {
        id: "5",
        name: `ה' מלך ירגזו עמים`,
        // name: `מזמור צ"ט`,
        text: `ה' מָלָךְ יִרְגְּזוּ עַמִּים יֹשֵׁב כְּרוּבִים תָּנוּט הָאָרֶץ: ה' בְּצִיּוֹן גָּדוֹל וְרָם הוּא עַל כָּל הָעַמִּים: יוֹדוּ שִׁמְךָ גָּדוֹל וְנוֹרָא קָדוֹשׁ הוּא: וְעֹז מֶלֶךְ מִשְׁפָּט אָהֵב אַתָּה כּוֹנַנְתָּ מֵישָׁרִים מִשְׁפָּט וּצְדָקָה בְּיַעֲקֹב אַתָּה עָשִׂיתָ: רוֹמְמוּ ה' אֱלֹהֵינוּ וְהִשְׁתַּחֲווּ לַהֲדֹם רַגְלָיו קָדוֹשׁ הוּא: מֹשֶׁה וְאַהֲרֹן בְּכֹהֲנָיו וּשְׁמוּאֵל בְּקֹרְאֵי שְׁמוֹ קֹרִאים אֶל ה' וְהוּא יַעֲנֵם: בְּעַמּוּד עָנָן יְדַבֵּר אֲלֵיהֶם שָׁמְרוּ עֵדֹתָיו וְחֹק נָתַן לָמוֹ: ה' אֱלֹהֵינוּ אַתָּה עֲנִיתָם אֵל נֹשֵׂא הָיִיתָ לָהֶם וְנֹקֵם עַל עֲלִילוֹתָם: רוֹמְמוּ ה' אֱלֹהֵינוּ וְהִשְׁתַּחֲווּ לְהַר קָדְשׁוֹ כִּי קָדוֹשׁ ה' אֱלֹהֵינוּ:`,
        subsections: [
            {
                id: "9",
                name: "משה ואהרון",
            },
            {
                id: "10",
                name: "בעמוד ענן",
            },
        ],
    },
    {
        id: "6",
        name: `מזמור לדוד`,
        // name: `מזמור כ"ט`,
        text: `מִזְמוֹר לְדָוִד הָבוּ לַה' בְּנֵי אֵלִים הָבוּ לַה' כָּבוֹד וָעֹז: הָבוּ לַה' כְּבוֹד שְׁמוֹ הִשְׁתַּחֲווּ לַה' בְּהַדְרַת קֹדֶשׁ: קוֹל ה' עַל הַמָּיִם אֵל הַכָּבוֹד הִרְעִים ה' עַל מַיִם רַבִּים: קוֹל ה' בַּכֹּחַ קוֹל ה' בֶּהָדָר: קוֹל ה' שֹׁבֵר אֲרָזִים וַיְשַׁבֵּר ה' אֶת אַרְזֵי הַלְּבָנוֹן: וַיַּרְקִידֵם כְּמוֹ עֵגֶל לְבָנוֹן וְשִׂרְיֹן כְּמוֹ בֶן רְאֵמִים: קוֹל ה' חֹצֵב לַהֲבוֹת אֵשׁ: קוֹל ה' יָחִיל מִדְבָּר יָחִיל ה' מִדְבַּר קָדֵשׁ: קוֹל ה' יְחוֹלֵל אַיָּלוֹת וַיֶּחֱשֹׂף יְעָרוֹת וּבְהֵיכָלוֹ כֻּלּוֹ אֹמֵר כָּבוֹד: ה' לַמַּבּוּל יָשָׁב וַיֵּשֶׁב ה' מֶלֶךְ לְעוֹלָם: ה' עֹז לְעַמּוֹ יִתֵּן ה' יְבָרֵךְ אֶת עַמּוֹ בַשָּׁלוֹם:`,
        subsections: [
            {
                id: "11",
                name: "מזמור לדוד",
            },
            {
                id: "12",
                name: "קול ה' יחולל איילות",
            },
        ],
    },
];

export function useTefila(key) {
    // const [db] = useState(() => new DBGateway());
    // const {isLoading, data, error} = useQuery("text", db.getText);
    // const text = data?.text.join(", ");
    // return { isLoading, text, error };

    return {
        // getSection: (id) => sections.filter(sec => sec.id == id)[0],
        sections,
        id: "kabbalat-shabbat",
        isLoading: false,
        error: null,
    };
}

export function useSubsection(id) {
    for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        for (let j = 0; j < section?.subsections.length; j++) {
            const subsection = section?.subsections[j];
            if (subsection.id == id) {
                return { text: section.text, ...subsection };
            }
        }
    }
}
