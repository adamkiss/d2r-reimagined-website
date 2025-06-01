export class RuneListHtmlValueConverter {
    private nameMap: object = {
        'El Rune': '<span class="text-rune-name">El</span> <span class="text-rune-nr">(1)</span>',
        'Eld Rune': '<span class="text-rune-name">Eld</span> <span class="text-rune-nr">(2)</span>',
        'Tir Rune': '<span class="text-rune-name">Tir</span> <span class="text-rune-nr">(3)</span>',
        'Nef Rune': '<span class="text-rune-name">Nef</span> <span class="text-rune-nr">(4)</span>',
        'Eth Rune': '<span class="text-rune-name">Eth</span> <span class="text-rune-nr">(5)</span>',
        'Ith Rune': '<span class="text-rune-name">Ith</span> <span class="text-rune-nr">(6)</span>',
        'Tal Rune': '<span class="text-rune-name">Tal</span> <span class="text-rune-nr">(7)</span>',
        'Ral Rune': '<span class="text-rune-name">Ral</span> <span class="text-rune-nr">(8)</span>',
        'Ort Rune': '<span class="text-rune-name">Ort</span> <span class="text-rune-nr">(9)</span>',
        'Thul Rune': '<span class="text-rune-name">Thul</span> <span class="text-rune-nr">(10)</span>',
        'Amn Rune': '<span class="text-rune-name">Amn</span> <span class="text-rune-nr">(11)</span>',
        'Sol Rune': '<span class="text-rune-name">Sol</span> <span class="text-rune-nr">(12)</span>',
        'Shael Rune': '<span class="text-rune-name">Shael</span> <span class="text-rune-nr">(13)</span>',
        'Dol Rune': '<span class="text-rune-name">Dol</span> <span class="text-rune-nr">(14)</span>',
        'Hel Rune': '<span class="text-rune-name">Hel</span> <span class="text-rune-nr">(15)</span>',
        'Io Rune': '<span class="text-rune-name">Io</span> <span class="text-rune-nr">(16)</span>',
        'Lum Rune': '<span class="text-rune-name">Lum</span> <span class="text-rune-nr">(17)</span>',
        'Ko Rune': '<span class="text-rune-name">Ko</span> <span class="text-rune-nr">(18)</span>',
        'Fal Rune': '<span class="text-rune-name">Fal</span> <span class="text-rune-nr">(19)</span>',
        'Lem Rune': '<span class="text-rune-name">Lem</span> <span class="text-rune-nr">(20)</span>',
        'Pul Rune': '<span class="text-rune-name">Pul</span> <span class="text-rune-nr">(21)</span>',
        'Um Rune': '<span class="text-rune-name">Um</span> <span class="text-rune-nr">(22)</span>',
        'Mal Rune': '<span class="text-rune-name">Mal</span> <span class="text-rune-nr">(23)</span>',
        'Ist Rune': '<span class="text-rune-name">Ist</span> <span class="text-rune-nr">(24)</span>',
        'Gul Rune': '<span class="text-rune-name">Gul</span> <span class="text-rune-nr">(25)</span>',
        'Vex Rune': '<span class="text-rune-name">Vex</span> <span class="text-rune-nr">(26)</span>',
        'Ohm Rune': '<span class="text-rune-name">Ohm</span> <span class="text-rune-nr">(27)</span>',
        'Lo Rune': '<span class="text-rune-name">Lo</span> <span class="text-rune-nr">(28)</span>',
        'Sur Rune': '<span class="text-rune-name">Sur</span> <span class="text-rune-nr">(29)</span>',
        'Ber Rune': '<span class="text-rune-name">Ber</span> <span class="text-rune-nr">(30)</span>',
        'Jah Rune': '<span class="text-rune-name">Jah</span> <span class="text-rune-nr">(31)</span>',
        'Cham Rune': '<span class="text-rune-name">Cham</span> <span class="text-rune-nr">(32)</span>',
        'Zod Rune': '<span class="text-rune-name">Zod</span> <span class="text-rune-nr">(33)</span>',
    }
   

    public toView(value: array): string | undefined {
        if (!value) {
            return;
        }
        return value.map(r => this.nameMap[r.Name]).join(' + ');
    }
}
