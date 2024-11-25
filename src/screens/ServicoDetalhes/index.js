import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useTheme } from '../../contexts/ThemeContext';
const ServicoDetalhesScreen = ({ route, navigation }) => {
    const { category } = route.params;
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    const services = {
        Manicure: [
            { name: 'Manicure: Spa e Lazer', price: 'R$ 120.00', stars: 4, image: 'https://i.pinimg.com/736x/52/a6/f7/52a6f7b709d8ab4690ee37594c5b6c18.jpg', address: 'Rua Exemplo, 123', hours: '9:00 - 18:00', description: 'Descrição do serviço de Manicure: Spa e Lazer.' },
            { name: 'Manicure: Beleza Total', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/49/9a/17/499a1734c3c8d80a79c98c9ea9c7200b.jpg', address: 'Rua Exemplo, 456', hours: '10:00 - 19:00', description: 'Descrição do serviço de Manicure: Beleza Total.' },
            { name: 'Manicure: Glamour Estética', price: 'R$ 120.00', stars: 3, image: 'https://i.pinimg.com/736x/3f/79/12/3f791226df5898fcefdef67dd64d9deb.jpg', address: 'Rua Exemplo, 789', hours: '8:00 - 17:00', description: 'Descrição do serviço de Manicure: Glamour Estética.' },
            { name: 'Manicure: Toque de Luxo', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/01/49/0d/01490d41976a11b069552c4a735dc331.jpg', address: 'Rua Estilo, 101', hours: '9:00 - 19:00', description: 'Descrição do serviço de Manicure: Toque de Luxo.' },
            { name: 'Manicure: Unhas Naturais', price: 'R$ 120.00', stars: 4, image: 'https://i.pinimg.com/736x/51/60/77/516077aedb9084ff1b42e3acad10b689.jpg', address: 'Rua Beleza, 202', hours: '10:00 - 18:00', description: 'Descrição do serviço de Manicure: Unhas Naturais.' },
            { name: 'Manicure: Terapia das Unhas', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/eb/a7/d6/eba7d605a69fd2b76ff1ae57044f1fc4.jpg', address: 'Rua Cuidado, 303', hours: '9:30 - 18:30', description: 'Descrição do serviço de Manicure: Terapia das Unhas.' },
            { name: 'Manicure: Design Criativo', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/73/bd/98/73bd986ddf2351294a9e16bf4e16f6b8.jpg', address: 'Rua Arte, 404', hours: '8:00 - 17:30', description: 'Descrição do serviço de Manicure: Design Criativo.' },
            { name: 'Manicure: Hidratação Profunda', price: 'R$ 120.00', stars: 4, image: 'https://i.pinimg.com/736x/68/f9/cb/68f9cbed13ea1a07a4234ab4cd1162ad.jpg', address: 'Rua Saúde, 505', hours: '9:00 - 18:00', description: 'Descrição do serviço de Manicure: Hidratação Profunda.' },
            { name: 'Manicure: Express', price: 'R$ 120.00', stars: 3, image: 'https://i.pinimg.com/736x/80/28/a0/8028a02300c9b6aa2aaece767b607bf0.jpg', address: 'Rua Rápida, 606', hours: '10:00 - 17:00', description: 'Descrição do serviço de Manicure: Express.' },
            { name: 'Manicure: Rê e Nata', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/4a/9a/9c/4a9a9c7435bc2ba21546c52c7476e6f1.jpg', address: 'Rua Tendência, 707', hours: '9:00 - 20:00', description: 'Descrição do serviço de Manicure: Rê e Nata.' },
        ],

        Pedicure: [
            { name: 'Pedicure: Beleza Total', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/b4/57/7b/b4577b4d9f37195b3d2d53a7e1f7e7bf.jpg', address: 'Rua Exemplo, 456', hours: '10:00 - 19:00', description: 'Descrição do serviço de Pedicure: Beleza Total.' },
            { name: 'Pedicure: Glamour Estética', price: 'R$ 120.00', stars: 3, image: 'https://i.pinimg.com/736x/06/21/5b/06215b3cf0dacf7ac3c394fd2ccff2a4.jpg', address: 'Rua Exemplo, 789', hours: '8:00 - 17:00', description: 'Descrição do serviço de Pedicure: Glamour Estética.' },
            { name: 'Pedicure: Spa dos Pés', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/82/8c/4e/828c4e0ad19331dc59751a030b418b83.jpg', address: 'Rua Relax, 101', hours: '9:00 - 19:00', description: 'Descrição do serviço de Pedicure: Spa dos Pés.' },
            { name: 'Pedicure: Esfoliação Profunda', price: 'R$ 120.00', stars: 4, image: 'https://i.pinimg.com/736x/98/85/4f/98854f8cf425fb8423ddc9ff90f9d8ff.jpg', address: 'Rua Cuidado, 202', hours: '10:00 - 18:00', description: 'Descrição do serviço de Pedicure: Esfoliação Profunda.' },
            { name: 'Pedicure: Hidratação Intensiva', price: 'R$ 120.00', stars: 4, image: 'https://i.pinimg.com/736x/60/51/93/6051934ca02c00cbfab1aa00b10e40fe.jpg', address: 'Rua Saúde, 303', hours: '9:30 - 18:30', description: 'Descrição do serviço de Pedicure: Hidratação Intensiva.' },
            { name: 'Pedicure: Cutículas Perfeitas', price: 'R$ 120.00', stars: 3, image: 'https://i.pinimg.com/736x/78/09/39/78093994d87de15f43bb983c6bc06d7b.jpg', address: 'Rua Beleza, 404', hours: '8:00 - 17:30', description: 'Descrição do serviço de Pedicure: Cutículas Perfeitas.' },
            { name: 'Pedicure: Unhas Decoradas', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/65/74/f6/6574f604671c563606b1a4cb4193ec50.jpg', address: 'Rua Arte, 505', hours: '9:00 - 18:00', description: 'Descrição do serviço de Pedicure: Unhas Decoradas.' },
            { name: 'Pedicure: Terapia dos Pés', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/de/c2/01/dec20164f60182e029d1138d874a43dc.jpg', address: 'Rua Bem-Estar, 606', hours: '10:00 - 17:00', description: 'Descrição do serviço de Pedicure: Terapia dos Pés.' },
            { name: 'Pedicure: Unhas de Gel', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/f7/8d/62/f78d6256af5705ec22730d13f7037a7f.jpg', address: 'Rua Tendência, 707', hours: '9:00 - 20:00', description: 'Descrição do serviço de Pedicure: Unhas de Gel.' },
            { name: 'Pedicure: Detox dos Pés', price: 'R$ 120.00', stars: 4, image: 'https://i.pinimg.com/736x/11/9c/79/119c79d85456d120dd3dbe45b0be8c00.jpg', address: 'Rua Equilíbrio, 808', hours: '8:00 - 19:00', description: 'Descrição do serviço de Pedicure: Detox dos Pés.' },
        ],

        Decoradas: [
            { name: 'Unhas Decoradas: Beleza Total', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/9d/b7/2d/9db72d93a6947555529249a690c0554e.jpg', address: 'Rua Exemplo, 456', hours: '10:00 - 19:00', description: 'Descrição do serviço de Unhas Decoradas: Beleza Total.' },
            { name: 'Unhas Decoradas: Glamour Estética', price: 'R$ 120.00', stars: 3, image: 'https://i.pinimg.com/736x/23/36/b2/2336b2cbcd9c9ea8203e8eb41790604b.jpg', address: 'Rua Exemplo, 789', hours: '8:00 - 17:00', description: 'Descrição do serviço de Unhas Decoradas: Glamour Estética.' },
            { name: 'Unhas Decoradas: Arte e Estilo', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/93/a6/fe/93a6fe6d45ec00072661dfbb9da42746.jpg', address: 'Rua Criativa, 101', hours: '9:00 - 19:00', description: 'Descrição do serviço de Unhas Decoradas: Arte e Estilo.' },
            { name: 'Unhas Decoradas: Estilo Sofisticado', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/48/f3/4a/48f34a03de8a511748879098ea53d76a.jpg', address: 'Rua Elegante, 202', hours: '10:00 - 18:00', description: 'Descrição do serviço de Unhas Decoradas: Estilo Sofisticado.' },
            { name: 'Unhas Decoradas: Fashion Nails', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/55/01/33/550133b4781b27e3fbb563d16635c3b3.jpg', address: 'Rua Fashion, 303', hours: '9:30 - 18:30', description: 'Descrição do serviço de Unhas Decoradas: Fashion Nails.' },
            { name: 'Unhas Decoradas: Encanto das Unhas', price: 'R$ 120.00', stars: 4, image: 'https://i.pinimg.com/736x/d8/99/0b/d8990b2efc43543c9222fc8cd1d8af09.jpg', address: 'Rua Encanto, 404', hours: '8:00 - 17:30', description: 'Descrição do serviço de Unhas Decoradas: Encanto das Unhas.' },
            { name: 'Unhas Decoradas: Pedrarias e Brilho', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/16/9d/db/169ddb07bd888053a76655c1f13f5646.jpg', address: 'Rua Brilho, 505', hours: '9:00 - 18:00', description: 'Descrição do serviço de Unhas Decoradas: Pedrarias e Brilho.' },
            { name: 'Unhas Decoradas: Criatividade nas Unhas', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/24/68/29/24682979668ece2d2457d2e67ac5caf2.jpg', address: 'Rua Arte, 606', hours: '10:00 - 17:00', description: 'Descrição do serviço de Unhas Decoradas: Criatividade nas Unhas.' },
            { name: 'Unhas Decoradas: Unhas Artísticas', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/84/77/1d/84771d9616359a47cc69ad9b41f5c362.jpg', address: 'Rua Artística, 707', hours: '9:00 - 20:00', description: 'Descrição do serviço de Unhas Decoradas: Unhas Artísticas.' },
            { name: 'Unhas Decoradas: Unhas 3D', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/8a/37/a4/8a37a49710cf1d2d62ae29eb2a44fdf6.jpg', address: 'Rua 3D, 808', hours: '8:00 - 19:00', description: 'Descrição do serviço de Unhas Decoradas: Unhas 3D.' },
        ],

        Gel: [
            { name: 'Unhas de Gel: Beleza Total', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/a8/de/a8/a8dea89495cd309a746bc9896c0bfb50.jpg', address: 'Rua Exemplo, 456', hours: '10:00 - 19:00', description: 'Descrição do serviço de Unhas de Gel: Beleza Total.' },
            { name: 'Unhas de Gel: Glamour Estética', price: 'R$ 120.00', stars: 4, image: 'https://i.pinimg.com/736x/2f/1d/b6/2f1db65c343cefdd2063fa62c78fc94c.jpg', address: 'Rua Exemplo, 789', hours: '8:00 - 17:00', description: 'Descrição do serviço de Unhas de Gel: Glamour Estética.' },
            { name: 'Unhas de Gel: Estilo Sofisticado', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/8d/01/92/8d01928e4b6fa56f53908e2252aa3202.jpg', address: 'Rua Elegante, 101', hours: '9:00 - 19:00', description: 'Descrição do serviço de Unhas de Gel: Estilo Sofisticado.' },
            { name: 'Unhas de Gel: Fashion Nails', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/10/75/b2/1075b2e9b4f3ffb1cc69b30b1ba4fa5c.jpg', address: 'Rua Fashion, 202', hours: '10:00 - 18:00', description: 'Descrição do serviço de Unhas de Gel: Fashion Nails.' },
            { name: 'Unhas de Gel: Unhas de Gel Perfeitas', price: 'R$ 120', stars: 5, image: 'https://i.pinimg.com/736x/6d/e6/c3/6de6c3dcd6ce0b7309cbcc4589de6ffb.jpg', address: 'Rua Perfeição, 303', hours: '9:30 - 18:30', description: 'Descrição do serviço de Unhas de Gel: Unhas de Gel Perfeitas.' },
            { name: 'Unhas de Gel: Gel Artístico', price: 'R$ 120.00', stars: 4, image: 'https://i.pinimg.com/736x/a4/5a/99/a45a99cb0ba501b5545608ad65b05341.jpg', address: 'Rua Arte, 404', hours: '8:00 - 17:30', description: 'Descrição do serviço de Unhas de Gel: Gel Artístico.' },
            { name: 'Unhas de Gel: Gel com Pedrarias', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/ba/33/8b/ba338b538ddec0ac2c3112ac60988802.jpg', address: 'Rua Brilho, 505', hours: '9:00 - 18:00', description: 'Descrição do serviço de Unhas de Gel: Gel com Pedrarias.' },
            { name: 'Unhas de Gel: Alongamento de Unhas', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/2f/c6/c5/2fc6c5758150ddb2fe02987520d6df28.jpg', address: 'Rua Alongamento, 606', hours: '10:00 - 17:00', description: 'Descrição do serviço de Unhas de Gel: Alongamento de Unhas.' },
            { name: 'Unhas de Gel: Gel com Decoração', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/90/88/b7/9088b78b25bf67ecf6e4d945eb45bf7a.jpg', address: 'Rua Criatividade, 707', hours: '9:00 - 20:00', description: 'Descrição do serviço de Unhas de Gel: Gel com Decoração.' },
            { name: 'Unhas de Gel: Unhas de Gel com Acabamento Matte', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/81/73/2d/81732de98321acca606ccb296822fcd3.jpg', address: 'Rua Matte, 808', hours: '8:00 - 19:00', description: 'Descrição do serviço de Unhas de Gel: Unhas de Gel com Acabamento Matte.' },
        ],
        Extensão: [
            { name: 'Alongamento de Unhas: Beleza Total', price: 'R$ 120', stars: 5, image: 'https://i.pinimg.com/736x/16/53/52/165352e4881c2dfc88f5fc8bc80ee0b1.jpg', address: 'Rua Exemplo, 456', hours: '10:00 - 19:00', description: 'Descrição do serviço de Alongamento de Unhas: Beleza Total.' },
            { name: 'Alongamento de Unhas: Glamour Estética', price: 'R$ 120.00', stars: 4, image: 'https://i.pinimg.com/736x/56/27/2c/56272c8e860a964451fc76fe7d06d91e.jpg', address: 'Rua Exemplo, 789', hours: '8:00 - 17:00', description: 'Descrição do serviço de Alongamento de Unhas: Glamour Estética.' },
            { name: 'Alongamento de Unhas: Estilo Sofisticado', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/68/5e/51/685e51c79434829bf88452de2e2b7df8.jpg', address: 'Rua Elegante, 101', hours: '9:00 - 19:00', description: 'Descrição do serviço de Alongamento de Unhas: Estilo Sofisticado.' },
            { name: 'Alongamento de Unhas: Fashion Nails', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/b6/55/a0/b655a034d4c76869b3251db5b223e514.jpg', address: 'Rua Fashion, 202', hours: '10:00 - 18:00', description: 'Descrição do serviço de Alongamento de Unhas: Fashion Nails.' },
            { name: 'Alongamento de Unhas: Unhas Super Longas', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/dd/20/16/dd2016648d5c33ebb12359d609f3ed3e.jpg', address: 'Rua Longa, 303', hours: '9:30 - 18:30', description: 'Descrição do serviço de Alongamento de Unhas: Unhas Super Longas.' },
            { name: 'Alongamento de Unhas: Alongamento Perfeito', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/49/06/20/490620063d8c19c539dd0ca71f76a9c3.jpg', address: 'Rua Perfeição, 404', hours: '8:00 - 17:30', description: 'Descrição do serviço de Alongamento de Unhas: Alongamento Perfeito.' },
            { name: 'Alongamento de Unhas: Unhas de Gel e Alongamento', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/6c/49/17/6c4917423d3c2074ff97ec2efe55c835.jpg', address: 'Rua Gel, 505', hours: '9:00 - 18:00', description: 'Descrição do serviço de Alongamento de Unhas: Unhas de Gel e Alongamento.' },
            { name: 'Alongamento de Unhas: Alongamento com Acrílico', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/17/c5/03/17c503ae252bd6a118c7200e2f7aa45d.jpg', address: 'Rua Acrílico, 606', hours: '10:00 - 17:00', description: 'Descrição do serviço de Alongamento de Unhas: Alongamento com Acrílico.' },
            { name: 'Alongamento de Unhas: Unhas de Fibra de Vidro', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/5f/aa/09/5faa0951574587c64a1afd1ce65ee2d4.jpg', address: 'Rua Fibra, 707', hours: '9:00 - 20:00', description: 'Descrição do serviço de Alongamento de Unhas: Unhas de Fibra de Vidro.' },
            { name: 'Alongamento de Unhas: Alongamento Natural', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/57/b8/84/57b884ff4c9589b908c13016fcc6a148.jpg', address: 'Rua Natural, 808', hours: '8:00 - 19:00', description: 'Descrição do serviço de Alongamento de Unhas: Alongamento Natural.' },
        ],
        Acrigel: [
            { name: 'Unhas de Acrigel: Beleza Total', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/19/28/db/1928dbae33d7dd19053141f29960a059.jpg', address: 'Rua Exemplo, 456', hours: '10:00 - 19:00', description: 'Descrição do serviço de Unhas de Acrigel: Beleza Total.' },
            { name: 'Unhas de Acrigel: Glamour Estética', price: 'R$ 120.00', stars: 4, image: 'https://i.pinimg.com/736x/31/50/5a/31505aa888d0e83a7e4399413fe34f7a.jpg', address: 'Rua Exemplo, 789', hours: '8:00 - 17:00', description: 'Descrição do serviço de Unhas de Acrigel: Glamour Estética.' },
            { name: 'Unhas de Acrigel: Estilo Sofisticado', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/fa/84/97/fa849753204f740c68de169460509244.jpg', address: 'Rua Elegante, 101', hours: '9:00 - 19:00', description: 'Descrição do serviço de Unhas de Acrigel: Estilo Sofisticado.' },
            { name: 'Unhas de Acrigel: Fashion Nails', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/24/59/b0/2459b0f18db13c6b23d538ddca0f0ba6.jpg', address: 'Rua Fashion, 202', hours: '10:00 - 18:00', description: 'Descrição do serviço de Unhas de Acrigel: Fashion Nails.' },
            { name: 'Unhas de Acrigel: Unhas Super Longas', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/98/3f/68/983f6866530c663e1038456bcdab2535.jpg', address: 'Rua Longa, 303', hours: '9:30 - 18:30', description: 'Descrição do serviço de Unhas de Acrigel: Unhas Super Longas.' },
            { name: 'Unhas de Acrigel: Acrigel Perfeito', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/62/59/26/62592649681d6004f82eac305bdf0915.jpg', address: 'Rua Perfeição, 404', hours: '8:00 - 17:30', description: 'Descrição do serviço de Unhas de Acrigel: Acrigel Perfeito.' },
            { name: 'Unhas de Acrigel: Acrigel Artístico', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/5f/fe/f4/5ffef4a7735f41a437e65141bbac13c9.jpg', address: 'Rua Arte, 505', hours: '9:00 - 18:00', description: 'Descrição do serviço de Unhas de Acrigel: Acrigel Artístico.' },
            { name: 'Unhas de Acrigel: Acrigel com Decoração', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/22/91/6e/22916e829f1c8b3940e09f8becf36745.jpg', address: 'Rua Criatividade, 606', hours: '10:00 - 17:00', description: 'Descrição do serviço de Unhas de Acrigel: Acrigel com Decoração.' },
            { name: 'Unhas de Acrigel: Alongamento com Acrigel', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/a4/18/00/a418003a086a5f1d8d4f62018071825d.jpg', address: 'Rua Acrílico, 707', hours: '9:00 - 20:00', description: 'Descrição do serviço de Unhas de Acrigel: Alongamento com Acrigel.' },
            { name: 'Unhas de Acrigel: Unhas de Acrigel com Pedrarias', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/47/7b/b3/477bb35c24d8c45b1c09aa278f6b70de.jpg', address: 'Rua Pedrarias, 808', hours: '8:00 - 19:00', description: 'Descrição do serviço de Unhas de Acrigel: Unhas de Acrigel com Pedrarias.' },
        ],
        Corte: [
            { name: 'Corte de Cabelo Feminino: Corte Clássico', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/29/ab/af/29abafc198ae907aa833a9d98671c071.jpg', address: 'Rua Exemplo, 456', hours: '10:00 - 19:00', description: 'Descrição do serviço de Corte de Cabelo Feminino: Corte Clássico.' },
            { name: 'Corte de Cabelo Feminino: Corte Moderno', price: 'R$ 120.00', stars: 4, image: 'https://i.pinimg.com/736x/29/71/51/2971517143cf9c33150a782236f5d7c1.jpg', address: 'Rua Exemplo, 789', hours: '8:00 - 17:00', description: 'Descrição do serviço de Corte de Cabelo Feminino: Corte Moderno.' },
            { name: 'Corte de Cabelo Feminino: Corte Desfiado', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/18/d1/71/18d171db1e4072c8614b37d05bf55325.jpg', address: 'Rua Elegante, 101', hours: '9:00 - 19:00', description: 'Descrição do serviço de Corte de Cabelo Feminino: Corte Desfiado.' },
            { name: 'Corte de Cabelo Feminino: Corte em Camadas', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/51/20/c4/5120c42961084b16433774c6368bc099.jpg', address: 'Rua Fashion, 202', hours: '10:00 - 18:00', description: 'Descrição do serviço de Corte de Cabelo Feminino: Corte em Camadas.' },
            { name: 'Corte de Cabelo Feminino: Corte Pixie', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/e2/3e/ee/e23eeec74c04be222601e3c39182d401.jpg', address: 'Rua Fashion, 303', hours: '9:00 - 18:00', description: 'Descrição do serviço de Corte de Cabelo Feminino: Corte Pixie.' },
            { name: 'Corte de Cabelo Feminino: Corte Bob', price: 'R$ 120.00', stars: 4, image: 'https://i.pinimg.com/736x/11/90/2a/11902ad6da0d5cb1f0a2b3b05fca21f3.jpg', address: 'Rua Elegante, 404', hours: '8:30 - 17:30', description: 'Descrição do serviço de Corte de Cabelo Feminino: Corte Bob.' },
            { name: 'Corte de Cabelo Feminino: Corte Longo e Estiloso', price: 'R$ 120', stars: 5, image: 'https://i.pinimg.com/736x/70/f2/18/70f218f5b5daf391690a33bccf47f909.jpg', address: 'Rua Longa, 505', hours: '9:00 - 19:00', description: 'Descrição do serviço de Corte de Cabelo Feminino: Corte Longo e Estiloso.' },
            { name: 'Corte de Cabelo Feminino: Corte Curto e Fashion', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/ef/25/c7/ef25c700332aaa6b4ac469859572c4ba.jpg', address: 'Rua Curta, 606', hours: '10:00 - 18:00', description: 'Descrição do serviço de Corte de Cabelo Feminino: Corte Curto e Fashion.' },
            { name: 'Corte de Cabelo Feminino: Corte Degradê', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/65/27/d3/6527d3f04f32e6fbff13f771dbb5997d.jpg', address: 'Rua Gradual, 707', hours: '8:00 - 17:00', description: 'Descrição do serviço de Corte de Cabelo Feminino: Corte Degradê.' },
            { name: 'Corte de Cabelo Feminino: Corte com Franjas', price: 'R$ 120.00', stars: 4, image: 'https://i.pinimg.com/736x/87/d2/8d/87d28dc43a0eec9a9884660edf264efe.jpg', address: 'Rua Franjas, 808', hours: '9:00 - 18:00', description: 'Descrição do serviço de Corte de Cabelo Feminino: Corte com Franjas.' },
        ],
        Pintura: [
            { name: 'Pintura de Cabelo: Mechas Loiras', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/72/23/dd/7223dd9cb7f7423cddb368e54c6693e7.jpg', address: 'Rua Exemplo, 456', hours: '10:00 - 19:00', description: 'Descrição do serviço de Pintura de Cabelo: Mechas Loiras.' },
            { name: 'Pintura de Cabelo: Pintura Ombré', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/49/72/64/497264d01732457935de5a769ded6c56.jpg', address: 'Rua Exemplo, 789', hours: '9:00 - 18:00', description: 'Descrição do serviço de Pintura de Cabelo: Pintura Ombré.' },
            { name: 'Pintura de Cabelo: Mechas Californianas', price: 'R$ 120.00', stars: 4, image: 'https://i.pinimg.com/736x/d8/54/54/d85454aa4a063988a2c434a485be4c71.jpg', address: 'Rua Estilo, 101', hours: '8:00 - 17:00', description: 'Descrição do serviço de Pintura de Cabelo: Mechas Californianas.' },
            { name: 'Pintura de Cabelo: Pintura Full Color', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/10/37/71/10377180438d44ab54bd05f6175db6bc.jpg', address: 'Rua Fashion, 202', hours: '10:00 - 18:00', description: 'Descrição do serviço de Pintura de Cabelo: Pintura Full Color.' },
            { name: 'Pintura de Cabelo: Pintura Chocolate', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/b0/bb/76/b0bb76d87af18ad5a3a210584ac1394b.jpg', address: 'Rua Doce, 303', hours: '9:00 - 19:00', description: 'Descrição do serviço de Pintura de Cabelo: Pintura Chocolate.' },
            { name: 'Pintura de Cabelo: Pintura Vermelha', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/40/c9/65/40c9652742e0868479d1e84c80c8e899.jpg', address: 'Rua Vermelha, 404', hours: '9:30 - 18:30', description: 'Descrição do serviço de Pintura de Cabelo: Pintura Vermelha.' },
            { name: 'Pintura de Cabelo: Pintura Platinada', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/2c/9f/8f/2c9f8f21a13cf4d3168df2c65233583b.jpg', address: 'Rua Prata, 505', hours: '8:00 - 17:00', description: 'Descrição do serviço de Pintura de Cabelo: Pintura Platinada.' },
            { name: 'Pintura de Cabelo: Pintura Chocolate Claro', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/b9/55/e3/b955e3df05dfe0a1fdd3943b616e79a9.jpg', address: 'Rua Claro, 606', hours: '9:00 - 19:00', description: 'Descrição do serviço de Pintura de Cabelo: Pintura Chocolate Claro.' },
            { name: 'Pintura de Cabelo: Pintura Cobre', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/26/76/d2/2676d2e39d1db23f742115fab499e4f9.jpg', address: 'Rua Cobre, 707', hours: '10:00 - 18:00', description: 'Descrição do serviço de Pintura de Cabelo: Pintura Cobre.' },
            { name: 'Pintura de Cabelo: Pintura Caramelo', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/eb/48/c7/eb48c7c4ed16a7263481ca9d377dbfb6.jpg', address: 'Rua Caramelo, 808', hours: '9:00 - 17:00', description: 'Descrição do serviço de Pintura de Cabelo: Pintura Caramelo.' },
        ],
        Escova: [
            { name: 'Escova de Cabelo: Escova Modelada', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/69/b9/63/69b963139d08490ea2514e88f55044e8.jpg', address: 'Rua Exemplo, 456', hours: '10:00 - 19:00', description: 'Descrição do serviço de Escova de Cabelo: Escova Modelada.' },
            { name: 'Escova de Cabelo: Escova Liso Perfeito', price: 'R$ 120.00', stars: 4, image: 'https://i.pinimg.com/736x/8b/0f/db/8b0fdb0fd5ded84931bb4506549cf28f.jpg', address: 'Rua Fashion, 789', hours: '9:00 - 18:00', description: 'Descrição do serviço de Escova de Cabelo: Escova Liso Perfeito.' },
            { name: 'Escova de Cabelo: Escova Cachos', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/83/f9/cc/83f9ccd17526749106a65f1ecca3b040.jpg', address: 'Rua Estilo, 101', hours: '9:00 - 19:00', description: 'Descrição do serviço de Escova de Cabelo: Escova Cachos.' },
            { name: 'Escova de Cabelo: Escova Progressiva', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/64/ee/21/64ee21b57ffd29fcec523615e758c60d.jpg', address: 'Rua Liso, 202', hours: '9:00 - 18:00', description: 'Descrição do serviço de Escova de Cabelo: Escova Progressiva.' },
            { name: 'Escova de Cabelo: Escova Espelhada', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/01/8c/c5/018cc5da189fef02b2e7785ca275cc39.jpg', address: 'Rua Brilho, 303', hours: '8:00 - 17:00', description: 'Descrição do serviço de Escova de Cabelo: Escova Espelhada.' },
            { name: 'Escova de Cabelo: Escova Definitiva', price: 'R$ 120', stars: 5, image: 'https://i.pinimg.com/736x/06/72/ea/0672ea0ca098123d24cc0e49da490fa0.jpg', address: 'Rua Bela, 404', hours: '10:00 - 18:00', description: 'Descrição do serviço de Escova de Cabelo: Escova Definitiva.' },
            { name: 'Escova de Cabelo: Escova Hidratação', price: 'R$ 120.00', stars: 4, image: 'https://i.pinimg.com/736x/35/6b/5d/356b5ddb158aa2f03d796f329d8f67cf.jpg', address: 'Rua Hidratante, 505', hours: '9:00 - 18:00', description: 'Descrição do serviço de Escova de Cabelo: Escova Hidratação.' },
            { name: 'Escova de Cabelo: Escova Detox', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/00/05/e6/0005e65c5bd1a920ba021ecf04fadf06.jpg', address: 'Rua Detox, 606', hours: '8:00 - 17:00', description: 'Descrição do serviço de Escova de Cabelo: Escova Detox.' },
            { name: 'Escova de Cabelo: Escova de Volume', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/84/1b/8b/841b8ba401e9eed861202632742a2467.jpg', address: 'Rua Volume, 707', hours: '9:00 - 19:00', description: 'Descrição do serviço de Escova de Cabelo: Escova de Volume.' },
            { name: 'Escova de Cabelo: Escova Relaxante', price: 'R$ 120.00', stars: 4, image: 'https://i.pinimg.com/736x/99/9b/05/999b052b8c6e378a2e8ab76d2b4ac2a3.jpg', address: 'Rua Relaxante, 808', hours: '10:00 - 18:00', description: 'Descrição do serviço de Escova de Cabelo: Escova Relaxante.' },
        ],
        Tratamento: [
            { name: 'Tratamento Capilar: Hidratação Profunda', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/c6/fc/54/c6fc54584a47fbe6cd8837047fbf3a37.jpg', address: 'Rua Exemplo, 456', hours: '9:00 - 18:00', description: 'Descrição do serviço de Tratamento Capilar: Hidratação Profunda.' },
            { name: 'Tratamento Capilar: Reconstrução Capilar', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/7b/bf/a7/7bbfa7a3e040ee7fff6874958f883c82.jpg', address: 'Rua Estilo, 789', hours: '10:00 - 19:00', description: 'Descrição do serviço de Tratamento Capilar: Reconstrução Capilar.' },
            { name: 'Tratamento Capilar: Cauterização Capilar', price: 'R$ 120.00', stars: 4, image: 'https://i.pinimg.com/736x/0d/c9/f6/0dc9f6b1a5f55cf794c1ba1d40c00cb5.jpg', address: 'Rua Beleza, 101', hours: '8:00 - 17:00', description: 'Descrição do serviço de Tratamento Capilar: Cauterização Capilar.' },
            { name: 'Tratamento Capilar: Botox Capilar', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/ce/f1/e7/cef1e7f1d306fadea48f3c681cfec70a.jpg', address: 'Rua Liso, 202', hours: '9:00 - 18:00', description: 'Descrição do serviço de Tratamento Capilar: Botox Capilar.' },
            { name: 'Tratamento Capilar: Selagem Térmica', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/ab/df/f4/abdff4a9514248fed8492c440c41d1c4.jpg', address: 'Rua Brilho, 303', hours: '9:00 - 19:00', description: 'Descrição do serviço de Tratamento Capilar: Selagem Térmica.' },
            { name: 'Tratamento Capilar: Hidratação de Óleo de Argan', price: 'R$ 120.00', stars: 4, image: 'https://i.pinimg.com/736x/cd/44/cf/cd44cf435195d98f3172058d456fcb14.jpg', address: 'Rua Luxo, 404', hours: '10:00 - 18:00', description: 'Descrição do serviço de Tratamento Capilar: Hidratação de Óleo de Argan.' },
            { name: 'Tratamento Capilar: Reconstrução de Fios Danificados', pprice: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/2d/c4/e4/2dc4e47cc6f72d2752bccaaa0e500e5d.jpg', address: 'Rua Forte, 505', hours: '9:00 - 19:00', description: 'Descrição do serviço de Tratamento Capilar: Reconstrução de Fios Danificados.' },
            { name: 'Tratamento Capilar: Nutrição Capilar', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/6a/35/bd/6a35bd11c165d2a40e5022957acb9578.jpg', address: 'Rua Viva, 606', hours: '9:00 - 18:00', description: 'Descrição do serviço de Tratamento Capilar: Nutrição Capilar.' },
            { name: 'Tratamento Capilar: Tratamento Anti-queda', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/f7/79/2a/f7792a7f8fc2ac71e4e4c3ef9069b657.jpg', address: 'Rua Crescimento, 707', hours: '8:00 - 17:00', description: 'Descrição do serviço de Tratamento Capilar: Tratamento Anti-queda.' },
            { name: 'Tratamento Capilar: Reconstrução com Queratina', price: 'R$ 120.00', stars: 4, image: 'https://i.pinimg.com/736x/4f/f8/74/4ff8748da4ef9e51f7c4de9be86ed461.jpg', address: 'Rua Saúde, 808', hours: '9:00 - 18:00', description: 'Descrição do serviço de Tratamento Capilar: Reconstrução com Queratina.' },
        ],
        Design: [
            { name: 'Design de Sobrancelhas: Desenho com Hena', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/47/4b/d7/474bd78cbd1e14e5c2fac6018fb0a8ae.jpg', address: 'Rua Exemplo, 456', hours: '9:00 - 18:00', description: 'Descrição do serviço de Design de Sobrancelhas: Desenho com Hena.' },
            { name: 'Design de Sobrancelhas: Sobrancelhas Fio a Fio', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/21/2d/bd/212dbda496abfdd8d0dbc524ac76fe12.jpg', address: 'Rua Estilo, 789', hours: '10:00 - 19:00', description: 'Descrição do serviço de Design de Sobrancelhas: Sobrancelhas Fio a Fio.' },
            { name: 'Design de Sobrancelhas: Design Compinado (Sombra e Fio)', price: 'R$ 120.00', stars: 4, image: 'https://i.pinimg.com/736x/10/9e/56/109e56a43b53dc12bf283b6d8a7757e9.jpg', address: 'Rua Beleza, 101', hours: '9:00 - 18:00', description: 'Descrição do serviço de Design de Sobrancelhas: Design Combinado (Sombra e Fio).' },
            { name: 'Design de Sobrancelhas: Hena e Correção', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/82/0a/0f/820a0f482447e5ece332b2807c04df87.jpg', address: 'Rua Simetria, 202', hours: '9:00 - 17:00', description: 'Descrição do serviço de Design de Sobrancelhas: Hena e Correção.' },
            { name: 'Design de Sobrancelhas: Microblading', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/94/58/ee/9458eed203e443d582642fe269aadbac.jpg', address: 'Rua Beleza, 303', hours: '10:00 - 18:00', description: 'Descrição do serviço de Design de Sobrancelhas: Microblading.' },
            { name: 'Design de Sobrancelhas: Sobrancelhas Perfeitas', price: 'R$ 120.00', stars: 4, image: 'https://i.pinimg.com/736x/b3/ab/b5/b3abb559f95f056145d35fee5a650515.jpg', address: 'Rua Harmony, 404', hours: '9:00 - 18:00', description: 'Descrição do serviço de Design de Sobrancelhas: Sobrancelhas Perfeitas.' },
            { name: 'Design de Sobrancelhas: Depilação e Design', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/ba/e0/db/bae0db7fa3306ffb39d101e527916bea.jpg', address: 'Rua Delicada, 505', hours: '8:00 - 17:00', description: 'Descrição do serviço de Design de Sobrancelhas: Depilação e Design.' },
            { name: 'Design de Sobrancelhas: Desenho Clássico', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/aa/5c/b4/aa5cb44952bee5cef8d88e61b0149db2.jpg', address: 'Rua Clássica, 606', hours: '9:00 - 19:00', description: 'Descrição do serviço de Design de Sobrancelhas: Desenho Clássico.' },
            { name: 'Design de Sobrancelhas: Design Natural', price: 'R$ 120.00', stars: 4, image: 'https://i.pinimg.com/736x/9f/b4/6c/9fb46c44692c9efa4572e08cfbdb85b2.jpg', address: 'Rua Naturale, 707', hours: '9:00 - 18:00', description: 'Descrição do serviço de Design de Sobrancelhas: Design Natural.' },
            { name: 'Design de Sobrancelhas: Laminação de Sobrancelhas', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/ae/5e/3b/ae5e3b040c5e4b004346b5863ded6f2f.jpg', address: 'Rua Seda, 808', hours: '10:00 - 18:00', description: 'Descrição do serviço de Design de Sobrancelhas: Laminação de Sobrancelhas.' },
        ],
        Henna: [
            { name: 'Henna para Sobrancelhas: Aplicação Completa', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/47/4b/d7/474bd78cbd1e14e5c2fac6018fb0a8ae.jpg', address: 'Rua Exemplo, 456', hours: '9:00 - 18:00', description: 'Descrição do serviço de Henna para Sobrancelhas: Aplicação Completa.' },
            { name: 'Henna para Sobrancelhas: Design e Hidratação', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/58/b1/be/58b1be49118054d8486d0f8fcfab8946.jpg', address: 'Rua Estilo, 789', hours: '10:00 - 19:00', description: 'Descrição do serviço de Henna para Sobrancelhas: Design e Hidratação.' },
            { name: 'Henna para Sobrancelhas: Hena Fio a Fio', price: 'R$ 120.00', stars: 4, image: 'https://i.pinimg.com/736x/e9/a2/be/e9a2bef4976d04a1e11b1cb16c489034.jpg', address: 'Rua Beleza, 101', hours: '9:00 - 18:00', description: 'Descrição do serviço de Henna para Sobrancelhas: Hena Fio a Fio.' },
            { name: 'Henna para Sobrancelhas: Hidratação e Modelagem', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/63/53/f6/6353f6f28a51b4525b62f995fa639899.jpg', address: 'Rua Simetria, 202', hours: '9:00 - 17:00', description: 'Descrição do serviço de Henna para Sobrancelhas: Hidratação e Modelagem.' },
            { name: 'Henna para Sobrancelhas: Aplicação de Henna para Volume', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/95/99/38/95993873f146bdbc20ee097b2e62d931.jpg', address: 'Rua Harmonia, 303', hours: '10:00 - 18:00', description: 'Descrição do serviço de Henna para Sobrancelhas: Aplicação de Henna para Volume.' },
            { name: 'Henna para Sobrancelhas: Hidratação Profunda com Henna', price: 'R$ 120.00', stars: 4, image: 'https://i.pinimg.com/736x/07/f9/db/07f9db19a2ed87252305d18b6b9889bb.jpg', address: 'Rua Beleza, 404', hours: '9:00 - 19:00', description: 'Descrição do serviço de Henna para Sobrancelhas: Hidratação Profunda com Henna.' },
            { name: 'Henna para Sobrancelhas: Design de Sobrancelhas com Henna', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/5f/b8/25/5fb8254c8f1619243d218a16c124e0a9.jpg', address: 'Rua Elegante, 505', hours: '9:00 - 18:00', description: 'Descrição do serviço de Henna para Sobrancelhas: Design de Sobrancelhas com Henna.' },
            { name: 'Henna para Sobrancelhas: Correção de Sobrancelhas com Henna', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/85/28/a7/8528a7797471e2880967fcb7ba702ea6.jpg', address: 'Rua Delicada, 606', hours: '9:00 - 17:00', description: 'Descrição do serviço de Henna para Sobrancelhas: Correção de Sobrancelhas com Henna.' },
            { name: 'Henna para Sobrancelhas: Hena e Limpeza', price: 'R$ 120.00', stars: 4, image: 'https://i.pinimg.com/736x/aa/88/67/aa88678188e4f76a5530168697056206.jpg', address: 'Rua Limpeza, 707', hours: '9:00 - 19:00', description: 'Descrição do serviço de Henna para Sobrancelhas: Hena e Limpeza.' },
            { name: 'Henna para Sobrancelhas: Design Natural com Henna', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/13/28/ba/1328bada520d802029885cb7191913cd.jpg', address: 'Rua Natural, 808', hours: '9:00 - 18:00', description: 'Descrição do serviço de Henna para Sobrancelhas: Design Natural com Henna.' },
        ],
        Micropigmentação: [
            { name: 'Micropigmentação de Sobrancelhas: Fio a Fio', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/6a/ec/93/6aec9395694825b51c597658bbec58f2.jpg', address: 'Rua Exemplo, 456', hours: '9:00 - 18:00', description: 'Descrição do serviço de Micropigmentação de Sobrancelhas: Fio a Fio.' },
            { name: 'Micropigmentação de Sobrancelhas: Sombra', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/09/49/76/094976d5d07b39b011b40c8c51e4c4b5.jpg', address: 'Rua Estilo, 789', hours: '10:00 - 19:00', description: 'Descrição do serviço de Micropigmentação de Sobrancelhas: Sombra.' },
            { name: 'Micropigmentação de Sobrancelhas: Design Completo', price: 'R$ 120.00', stars: 4, image: 'https://i.pinimg.com/736x/46/9e/22/469e225aef33b991dc350db5aee36746.jpg', address: 'Rua Beleza, 101', hours: '9:00 - 18:00', description: 'Descrição do serviço de Micropigmentação de Sobrancelhas: Design Completo.' },
            { name: 'Micropigmentação de Sobrancelhas: Microblading', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/95/f6/d0/95f6d0f311ba13b562cf8b73bf3af695.jpg', address: 'Rua Simetria, 202', hours: '9:00 - 17:00', description: 'Descrição do serviço de Micropigmentação de Sobrancelhas: Microblading.' },
            { name: 'Micropigmentação de Sobrancelhas: Pêlos Fios Naturais', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/92/58/36/9258365eab3abf406ca2f284c93d6241.jpg', address: 'Rua Harmonia, 303', hours: '10:00 - 18:00', description: 'Descrição do serviço de Micropigmentação de Sobrancelhas: Pêlos Fios Naturais.' },
            { name: 'Micropigmentação de Sobrancelhas: Toque de Seda', price: 'R$ 120.00', stars: 4, image: 'https://i.pinimg.com/736x/d2/ab/44/d2ab4492ffdfaaffae3969e8a0f6bf4b.jpg', address: 'Rua Elegante, 404', hours: '9:00 - 19:00', description: 'Descrição do serviço de Micropigmentação de Sobrancelhas: Toque de Seda.' },
            { name: 'Micropigmentação de Sobrancelhas: Camada Natural', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/29/35/f2/2935f24da2318a7d7b2623df220e8c80.jpg', address: 'Rua Beleza, 505', hours: '9:00 - 18:00', description: 'Descrição do serviço de Micropigmentação de Sobrancelhas: Camada Natural.' },
            { name: 'Micropigmentação de Sobrancelhas: Design e Hidratação', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/bd/44/52/bd4452ba2b94457a755301faa68ede03.jpg', address: 'Rua Delicada, 606', hours: '9:00 - 17:00', description: 'Descrição do serviço de Micropigmentação de Sobrancelhas: Design e Hidratação.' },
            { name: 'Micropigmentação de Sobrancelhas: Hidratação com Pigmentação', price: 'R$ 120.00', stars: 4, image: 'https://i.pinimg.com/736x/f8/ba/f7/f8baf7a4b8ded8e83f58761261960445.jpg', address: 'Rua Clara, 707', hours: '9:00 - 18:00', description: 'Descrição do serviço de Micropigmentação de Sobrancelhas: Hidratação com Pigmentação.' },
            { name: 'Micropigmentação de Sobrancelhas: Fio a Fio e Sombra', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/df/1e/ad/df1eadbe98fb78f379d5ee750ce15f04.jpg', address: 'Rua Elegante, 808', hours: '9:00 - 19:00', description: 'Descrição do serviço de Micropigmentação de Sobrancelhas: Fio a Fio e Sombra.' },
        ],
        Microblading: [
            { name: 'Microblading: Fio a Fio', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/76/4f/36/764f360fd8365fc2e43b73fb50839916.jpg', address: 'Rua Exemplo, 456', hours: '9:00 - 18:00', description: 'Descrição do serviço de Microblading: Fio a Fio.' },
            { name: 'Microblading: Design Completo', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/97/c2/08/97c20843a188e767209dfe8728227ddf.jpg', address: 'Rua Estilo, 789', hours: '10:00 - 19:00', description: 'Descrição do serviço de Microblading: Design Completo.' },
            { name: 'Microblading: Fios Naturais e Definição', price: 'R$ 120.00', stars: 4, image: 'https://i.pinimg.com/736x/cf/de/46/cfde46a85147520e9d76ce545a983036.jpg', address: 'Rua Beleza, 101', hours: '9:00 - 18:00', description: 'Descrição do serviço de Microblading: Fios Naturais e Definição.' },
            { name: 'Microblading: Sobrancelhas Fio a Fio', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/45/95/b2/4595b2d29f580115383322749ac6fc27.jpg', address: 'Rua Simetria, 202', hours: '9:00 - 17:00', description: 'Descrição do serviço de Microblading: Sobrancelhas Fio a Fio.' },
            { name: 'Microblading: Design e Preenchimento', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/1e/25/14/1e2514bc3888140eb390d4cb72dc9c64.jpg', address: 'Rua Harmonia, 303', hours: '10:00 - 18:00', description: 'Descrição do serviço de Microblading: Design e Preenchimento.' },
            { name: 'Microblading: Sombra e Fio a Fio', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/0b/2c/72/0b2c7209bfbf32e8ffacfd3ccfdae634.jpg', address: 'Rua Elegante, 404', hours: '9:00 - 19:00', description: 'Descrição do serviço de Microblading: Sombra e Fio a Fio.' },
            { name: 'Microblading: Contorno e Definição', price: 'R$ 120.00', stars: 4, image: 'https://i.pinimg.com/736x/2f/f5/5e/2ff55e272c0f293a2cf65d7429b6614c.jpg', address: 'Rua Beleza, 505', hours: '9:00 - 18:00', description: 'Descrição do serviço de Microblading: Contorno e Definição.' },
            { name: 'Microblading: Hidratação e Fio a Fio', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/3b/0f/c8/3b0fc8c51a0da5dbfae71abecb80275f.jpg', address: 'Rua Delicada, 606', hours: '9:00 - 17:00', description: 'Descrição do serviço de Microblading: Hidratação e Fio a Fio.' },
            { name: 'Microblading: Design Natural', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/a9/ec/7d/a9ec7d8aa80690b535cc1ab37a06aff9.jpg', address: 'Rua Clara, 707', hours: '9:00 - 18:00', description: 'Descrição do serviço de Microblading: Design Natural.' },
            { name: 'Microblading: Hidratação com Fio a Fio', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/3a/49/54/3a49542e1fcf2cc41d0e9f2d81baedc2.jpg', address: 'Rua Elegante, 808', hours: '9:00 - 19:00', description: 'Descrição do serviço de Microblading: Hidratação com Fio a Fio.' },
        ],
        Alongamento: [
            { name: 'Alongamento de Cílios: Fio a Fio', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/da/69/ac/da69ac05704232fd90146ff41f0d3c8c.jpg', address: 'Rua Exemplo, 456', hours: '9:00 - 18:00', description: 'Descrição do serviço de Alongamento de Cílios: Fio a Fio.' },
            { name: 'Alongamento de Cílios: Volume Russo', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/dc/13/c3/dc13c309c11b2804a66c50724652148e.jpg', address: 'Rua Estilo, 789', hours: '10:00 - 19:00', description: 'Descrição do serviço de Alongamento de Cílios: Volume Russo.' },
            { name: 'Alongamento de Cílios: Classic', price: 'R$ 120.00', stars: 4, image: 'https://i.pinimg.com/736x/15/3f/d7/153fd7eb676341713cadcdfcfdd8b9a6.jpg', address: 'Rua Beleza, 101', hours: '9:00 - 18:00', description: 'Descrição do serviço de Alongamento de Cílios: Classic.' },
            { name: 'Alongamento de Cílios: Mega Volume', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/92/6f/3d/926f3dd79d88b7f0711422185380e176.jpg', address: 'Rua Simetria, 202', hours: '9:00 - 17:00', description: 'Descrição do serviço de Alongamento de Cílios: Mega Volume.' },
            { name: 'Alongamento de Cílios: Volume 4D', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/de/20/85/de2085650d69fafae560d71cc9f4174d.jpg', address: 'Rua Clara, 707', hours: '9:00 - 18:00', description: 'Descrição do serviço de Alongamento de Cílios: Volume 4D.' },
            { name: 'Alongamento de Cílios: Power Volume', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/8f/95/f0/8f95f06d4b393cdd94ef6a5d2c8ceff3.jpg', address: 'Rua Elegante, 808', hours: '9:00 - 19:00', description: 'Descrição do serviço de Alongamento de Cílios: Power Volume.' },
        ],
        Lifting: [
            { name: 'Lifting de Cílios: Natural', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/c7/51/a9/c751a9e853890cd47dd7773e02c1ba91.jpg', address: 'Rua Exemplo, 456', hours: '9:00 - 18:00', description: 'Descrição do serviço de Lifting de Cílios: Natural.' },
            { name: 'Lifting de Cílios: Volume Intenso', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/f3/1b/50/f31b5099e0baa05a92f21e8b8569a3d0.jpg', address: 'Rua Estilo, 789', hours: '10:00 - 19:00', description: 'Descrição do serviço de Lifting de Cílios: Volume Intenso.' },
            { name: 'Lifting de Cílios: Power Lift', price: 'R$ 120.00', stars: 4, image: 'https://i.pinimg.com/736x/de/62/3c/de623c832ce66833643ec59a314eda9b.jpg', address: 'Rua Beleza, 101', hours: '9:00 - 18:00', description: 'Descrição do serviço de Lifting de Cílios: Power Lift.' },
            { name: 'Lifting de Cílios: Efeito Curvado', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/ee/09/33/ee09336ecd11361d93de7ddd01205a88.jpg', address: 'Rua Simetria, 202', hours: '9:00 - 17:00', description: 'Descrição do serviço de Lifting de Cílios: Efeito Curvado.' },
            { name: 'Lifting de Cílios: Volume Natural', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/e9/5c/77/e95c77473dd950acbe4e841bec54788d.jpg', address: 'Rua Harmonia, 303', hours: '10:00 - 18:00', description: 'Descrição do serviço de Lifting de Cílios: Volume Natural.' },
            { name: 'Lifting de Cílios: Efeito Duradouro', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/34/05/5f/34055f6da7b8b07dfdacd43b99f390bc.jpg', address: 'Rua Clara, 707', hours: '9:00 - 18:00', description: 'Descrição do serviço de Lifting de Cílios: Efeito Duradouro.' },
            { name: 'Lifting de Cílios: Efeito Fox Eyes', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/21/23/7e/21237e293335e4380a3e80a9afcfd9ee.jpg', address: 'Rua Elegante, 808', hours: '9:00 - 19:00', description: 'Descrição do serviço de Lifting de Cílios: Efeito Fox Eyes.' },
        ],
        Postiços: [
            { name: 'Cílios Postiços: Volume', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/52/4b/55/524b5530e00ce0f069d1fd1d0d64d5be.jpg', address: 'Rua Exemplo, 456', hours: '9:00 - 18:00', description: 'Descrição do serviço de Cílios Postiços: Volume.' },
            { name: 'Cílios Postiços: Natural', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/7f/dd/23/7fdd234d97acb3f958e8922795715335.jpg', address: 'Rua Estilo, 789', hours: '10:00 - 19:00', description: 'Descrição do serviço de Cílios Postiços: Natural.' },
            { name: 'Cílios Postiços: Longos e Elegantes', price: 'R$ 120.00', stars: 4, image: 'https://i.pinimg.com/736x/79/39/d3/7939d368b69831cc522f9e3fda27a316.jpg', address: 'Rua Beleza, 101', hours: '9:00 - 18:00', description: 'Descrição do serviço de Cílios Postiços: Longos e Elegantes.' },
            { name: 'Cílios Postiços: Efeito Gato', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/1f/28/d9/1f28d95dcce3177adb6edf8165ba1e04.jpg', address: 'Rua Simetria, 202', hours: '9:00 - 17:00', description: 'Descrição do serviço de Cílios Postiços: Efeito Gato.' },
            { name: 'Cílios Postiços: Alongado e Elegante', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/0b/dd/f0/0bddf00b82e0811d8925d7d57dbed677.jpg', address: 'Rua Elegante, 808', hours: '9:00 - 19:00', description: 'Descrição do serviço de Cílios Postiços: Alongado e Elegante.' },
        ],
        Airbrush: [
            { name: 'Maquiagem Airbrush: Noiva', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/77/1a/3e/771a3e6bdca726e00920d6daab6ba23d.jpg', address: 'Rua Exemplo, 456', hours: '9:00 - 18:00', description: 'Descrição do serviço de Maquiagem Airbrush: Noiva.' },
            { name: 'Maquiagem Airbrush: Festa', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/fe/25/00/fe2500f69fc8108c7edf6bc56d9831f0.jpg', address: 'Rua Estilo, 789', hours: '10:00 - 19:00', description: 'Descrição do serviço de Maquiagem Airbrush: Festa.' },
            { name: 'Maquiagem Airbrush: Evento Corporativo', price: 'R$ 120.00', stars: 4, image: 'https://i.pinimg.com/736x/6f/89/ce/6f89cee11725a02519f6adad4929a253.jpg', address: 'Rua Beleza, 101', hours: '9:00 - 18:00', description: 'Descrição do serviço de Maquiagem Airbrush: Evento Corporativo.' },
            { name: 'Maquiagem Airbrush: Editorial', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/43/4a/bc/434abc521310de2fa3ec7a8e4637e3aa.jpg', address: 'Rua Simetria, 202', hours: '9:00 - 17:00', description: 'Descrição do serviço de Maquiagem Airbrush: Editorial.' },
            { name: 'Maquiagem Airbrush: Festa de 15 Anos', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/3b/2d/92/3b2d925bdfb12e7fa5672e3bf62ff8e7.jpg', address: 'Rua Harmonia, 303', hours: '10:00 - 18:00', description: 'Descrição do serviço de Maquiagem Airbrush: Festa de 15 Anos.' },
            { name: 'Maquiagem Airbrush: Formatura', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/4a/72/f7/4a72f7640852deaa02e9d5ece467ebd5.jpg', address: 'Rua Elegante, 404', hours: '9:00 - 19:00', description: 'Descrição do serviço de Maquiagem Airbrush: Formatura.' },
            { name: 'Maquiagem Airbrush: Maquiagem para TV', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/e3/79/29/e379291c46711e19a631aed4e6fed4f2.jpg', address: 'Rua Beleza, 505', hours: '9:00 - 18:00', description: 'Descrição do serviço de Maquiagem Airbrush: Maquiagem para TV.' },
            { name: 'Maquiagem Airbrush: Maquiagem para Vídeo', price: 'R$ 120.00', stars: 4, image: 'https://i.pinimg.com/736x/a2/f8/17/a2f81761a9a0317f6ddba6d3c17181d1.jpg', address: 'Rua Delicada, 606', hours: '9:00 - 17:00', description: 'Descrição do serviço de Maquiagem Airbrush: Maquiagem para Vídeo.' },
            { name: 'Maquiagem Airbrush: Super Natural', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/ab/eb/6f/abeb6f79d841af5143fce9b52ebe212f.jpg', address: 'Rua Clara, 707', hours: '9:00 - 18:00', description: 'Descrição do serviço de Maquiagem Airbrush: Super Natural.' },
            { name: 'Maquiagem Airbrush: Noite Glamourosa', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/5d/6c/e6/5d6ce6a6055f6a4af7ebad6a36b24a18.jpg', address: 'Rua Elegante, 808', hours: '9:00 - 19:00', description: 'Descrição do serviço de Maquiagem Airbrush: Noite Glamourosa.' },
        ],
        Casamento: [
            { name: 'Maquiagem Casamento: Noiva', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/f7/ff/08/f7ff080a24c97908d5cecf463bbe1337.jpg', address: 'Rua Exemplo, 456', hours: '9:00 - 18:00', description: 'Descrição do serviço de Maquiagem Casamento: Noiva.' },
            { name: 'Maquiagem Casamento: Maquiagem Completa', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/b9/b9/d9/b9b9d90a497c63660186e2b2cdaede0c.jpg', address: 'Rua Estilo, 789', hours: '10:00 - 19:00', description: 'Descrição do serviço de Maquiagem Casamento: Maquiagem Completa.' },
            { name: 'Maquiagem Casamento: Noiva e Damas de Honra', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/3e/82/8b/3e828b968317023943445c361816682c.jpg', address: 'Rua Beleza, 101', hours: '9:00 - 18:00', description: 'Descrição do serviço de Maquiagem Casamento: Noiva e Damas de Honra.' },
            { name: 'Maquiagem Casamento: Maquiagem para o Casal', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/6b/3b/9e/6b3b9e45ddbbe325cdffe99de172c4d9.jpg', address: 'Rua Simetria, 202', hours: '9:00 - 17:00', description: 'Descrição do serviço de Maquiagem Casamento: Maquiagem para o Casal.' },
            { name: 'Maquiagem Casamento: Teste de Maquiagem', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/b8/30/14/b830145921b309c50852e36db33bb115.jpg', address: 'Rua Harmonia, 303', hours: '10:00 - 18:00', description: 'Descrição do serviço de Maquiagem Casamento: Teste de Maquiagem.' },
            { name: 'Maquiagem Casamento: Maquiagem para a Mãe da Noiva', price: 'R$ 120.00', stars: 4, image: 'https://i.pinimg.com/736x/f7/61/5d/f7615d3b7039bc919c0ceb746650637f.jpg', address: 'Rua Elegante, 404', hours: '9:00 - 19:00', description: 'Descrição do serviço de Maquiagem Casamento: Maquiagem para a Mãe da Noiva.' },
            { name: 'Maquiagem Casamento: Maquiagem para a Mãe do Noivo', price: 'R$ 120.00', stars: 4, image: 'https://i.pinimg.com/736x/16/56/e8/1656e833c838d5b7c3da6973f5ac5638.jpg', address: 'Rua Beleza, 505', hours: '9:00 - 18:00', description: 'Descrição do serviço de Maquiagem Casamento: Maquiagem para a Mãe do Noivo.' },
            { name: 'Maquiagem Casamento: Maquiagem para Madrinhas', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/23/b2/2c/23b22c1c6f456073e5ee51ddda2c2179.jpg', address: 'Rua Delicada, 606', hours: '9:00 - 17:00', description: 'Descrição do serviço de Maquiagem Casamento: Maquiagem para Madrinhas.' },
            { name: 'Maquiagem Casamento: Maquiagem para Casamento ao Ar Livre', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/8b/b9/d1/8bb9d10bbc8d55e9632807060b85e553.jpg', address: 'Rua Clara, 707', hours: '9:00 - 18:00', description: 'Descrição do serviço de Maquiagem Casamento: Maquiagem para Casamento ao Ar Livre.' },
            { name: 'Maquiagem Casamento: Maquiagem para Mini Wedding', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/33/26/a5/3326a5f74cbba5be63acc1782fb8fbb0.jpg', address: 'Rua Elegante, 808', hours: '9:00 - 19:00', description: 'Descrição do serviço de Maquiagem Casamento: Maquiagem para Mini Wedding.' },
        ],
        Infantil: [
            { name: 'Maquiagem Infantil: Festa de Aniversário', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/9b/49/1a/9b491a6555dc8fc0a0cd67ac02b5d15c.jpg', address: 'Rua Exemplo, 456', hours: '9:00 - 18:00', description: 'Descrição do serviço de Maquiagem Infantil: Festa de Aniversário.' },
            { name: 'Maquiagem Infantil: Maquiagem para Bailinho', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/b7/08/b4/b708b4a802ce1a04cb2e6fe3346d02a9.jpg', address: 'Rua Estilo, 789', hours: '10:00 - 19:00', description: 'Descrição do serviço de Maquiagem Infantil: Maquiagem para Bailinho.' },
            { name: 'Maquiagem Infantil: Maquiagem para Carnaval', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/e7/39/8e/e7398e68c49a24f7d2a1bf0722d70ee0.jpg', address: 'Rua Beleza, 101', hours: '9:00 - 17:00', description: 'Descrição do serviço de Maquiagem Infantil: Maquiagem para Carnaval.' },
            { name: 'Maquiagem Infantil: Maquiagem para Festa Temática', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/1a/51/97/1a5197177bd425d9835311d06bc66f56.jpg', address: 'Rua Simetria, 202', hours: '9:00 - 18:00', description: 'Descrição do serviço de Maquiagem Infantil: Maquiagem para Festa Temática.' },
            { name: 'Maquiagem Infantil: Maquiagem de Princesa', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/e8/37/f1/e837f168ba99b2aa6869ab2483089815.jpg', address: 'Rua Harmonia, 303', hours: '10:00 - 18:00', description: 'Descrição do serviço de Maquiagem Infantil: Maquiagem de Princesa.' },
            { name: 'Maquiagem Infantil: Maquiagem de Super-Herói', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/2f/51/87/2f5187eb506978d5eaa6f4e555a56266.jpg', address: 'Rua Elegante, 404', hours: '9:00 - 19:00', description: 'Descrição do serviço de Maquiagem Infantil: Maquiagem de Super-Herói.' },
            { name: 'Maquiagem Infantil: Maquiagem de Bichinho', price: 'R$ 120.00', stars: 4, image: 'https://i.pinimg.com/736x/03/00/f1/0300f1400df756b7c61641fcf64f955c.jpg', address: 'Rua Beleza, 505', hours: '9:00 - 17:00', description: 'Descrição do serviço de Maquiagem Infantil: Maquiagem de Bichinho.' },
            { name: 'Maquiagem Infantil: Maquiagem de Fada', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/ca/24/80/ca2480f53b5128bedbd0b015e6fe364a.jpg', address: 'Rua Delicada, 606', hours: '9:00 - 18:00', description: 'Descrição do serviço de Maquiagem Infantil: Maquiagem de Fada.' },
            { name: 'Maquiagem Infantil: Maquiagem para Festa de Halloween', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/2b/39/d1/2b39d141be2a1711f26341c7ad4243b3.jpg', address: 'Rua Clara, 707', hours: '9:00 - 18:00', description: 'Descrição do serviço de Maquiagem Infantil: Maquiagem para Festa de Halloween.' },
            { name: 'Maquiagem Infantil: Maquiagem de Coelhinha', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/7a/c1/63/7ac16302f5852efae49ffb11a06624b6.jpg', address: 'Rua Elegante, 808', hours: '9:00 - 19:00', description: 'Descrição do serviço de Maquiagem Infantil: Maquiagem de Coelhinha.' },
        ],
        Artística: [
            { name: 'Maquiagem Artística: Máscara de Carnaval', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/c9/a6/5f/c9a65f8670b7bf38cf9af7670d04c7ce.jpg', address: 'Rua Exemplo, 456', hours: '9:00 - 18:00', description: 'Descrição do serviço de Maquiagem Artística: Máscara de Carnaval.' },
            { name: 'Maquiagem Artística: Maquiagem de Fantasia', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/ee/c9/c7/eec9c79c4c11a36494a62082520b0d9d.jpg', address: 'Rua Estilo, 789', hours: '10:00 - 19:00', description: 'Descrição do serviço de Maquiagem Artística: Maquiagem de Fantasia.' },
            { name: 'Maquiagem Artística: Maquiagem de Pantera', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/9b/fc/16/9bfc16f6d27fc512f25b6338b3153e0c.jpg', address: 'Rua Beleza, 505', hours: '9:00 - 17:00', description: 'Descrição do serviço de Maquiagem Artística: Maquiagem de Pantera.' },
            { name: 'Maquiagem Artística: Maquiagem de Mulher-Maravilha', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/38/e9/69/38e9697373f3351b5d5d610f704aa1ec.jpg', address: 'Rua Delicada, 606', hours: '9:00 - 18:00', description: 'Descrição do serviço de Maquiagem Artística: Maquiagem de Mulher-Maravilha.' },
            { name: 'Maquiagem Artística: Maquiagem de Alien', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/a9/44/22/a944223eb447d00fd3b88e195eba89d2.jpg', address: 'Rua Clara, 707', hours: '9:00 - 18:00', description: 'Descrição do serviço de Maquiagem Artística: Maquiagem de Alien.' },
            { name: 'Maquiagem Artística: Maquiagem de Zumbi', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/f7/23/40/f72340b5a70532c1bb30c767a5363101.jpg', address: 'Rua Elegante, 808', hours: '9:00 - 19:00', description: 'Descrição do serviço de Maquiagem Artística: Maquiagem de Zumbi.' },
        ],
        Navalhada: [
            { name: 'Barba: Navalhada Clássica', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/d5/90/39/d590393cebdf0bcc2bce6fdea0baf4ca.jpg', address: 'Rua Exemplo, 123', hours: '9:00 - 18:00', description: 'Descrição do serviço de Barba: Navalhada Clássica.' },
            { name: 'Barba: Navalhada de Luxo', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/1e/50/5b/1e505b87b9db3194f21e8396b2d90b3c.jpg', address: 'Rua Estilo, 456', hours: '10:00 - 19:00', description: 'Descrição do serviço de Barba: Navalhada de Luxo.' },
            { name: 'Barba: Navalhada Completa', price: 'R$ 120.00', stars: 4, image: 'https://i.pinimg.com/736x/e9/07/f4/e907f47d312ad07c0a0606ac19288abd.jpg', address: 'Rua Beleza, 789', hours: '8:00 - 17:00', description: 'Descrição do serviço de Barba: Navalhada Completa.' },
            { name: 'Barba: Navalhada com Corte de Cabelo', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/33/5b/3f/335b3fb68ad18dec3430cb208023c737.jpg', address: 'Rua Elegante, 606', hours: '9:00 - 19:00', description: 'Descrição do serviço de Barba: Navalhada com Corte de Cabelo.' },
            { name: 'Barba: Navalhada Deluxe', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/aa/2a/3a/aa2a3a48c0156999d704134ba9f66396.jpg', address: 'Rua Simetria, 707', hours: '9:00 - 18:00', description: 'Descrição do serviço de Barba: Navalhada Deluxe.' },
        ],
        Tintura: [
            { name: 'Barba: Pintura Clássica', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/12/19/6f/12196f336ee76d9ea0e12d1597b20c52.jpg', address: 'Rua Exemplo, 123', hours: '9:00 - 18:00', description: 'Descrição do serviço de Barba: Pintura Clássica.' },
            { name: 'Barba: Pintura com Sombra', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/a1/dd/e0/a1dde0c744bf029526590b6c2898fc37.jpg', address: 'Rua Estilo, 456', hours: '10:00 - 19:00', description: 'Descrição do serviço de Barba: Pintura com Sombra.' },
            { name: 'Barba: Pintura Natural', price: 'R$ 120.00', stars: 4, image: 'https://i.pinimg.com/736x/a9/ca/7f/a9ca7f02946bf91807ecf6fb2dc11a65.jpg', address: 'Rua Beleza, 789', hours: '8:00 - 17:00', description: 'Descrição do serviço de Barba: Pintura Natural.' },
            { name: 'Barba: Pintura Intensiva', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/e7/c9/8f/e7c98fede003ed4edc77d756fda36ee6.jpg', address: 'Rua Elegante, 101', hours: '9:00 - 18:00', description: 'Descrição do serviço de Barba: Pintura Intensiva.' },
            { name: 'Barba: Pintura Premium', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/ce/7d/f4/ce7df4846a123722d6e940bb4b32b249.jpg', address: 'Rua Estilo, 202', hours: '9:00 - 18:00', description: 'Descrição do serviço de Barba: Pintura Premium.' },
            { name: 'Barba: Pintura com Hidratação', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/8f/29/f2/8f29f2b045ea00f06bf4400b5a7dee8f.jpg', address: 'Rua Beleza, 303', hours: '10:00 - 19:00', description: 'Descrição do serviço de Barba: Pintura com Hidratação.' },
            { name: 'Barba: Pintura e Definição', price: 'R$ 120.00', strars: 5, image: 'https://i.pinimg.com/736x/41/b9/56/41b95623038b259705e37c39fd367a75.jpg', address: 'Rua Elegante, 606', hours: '9:00 - 19:00', description: 'Descrição do serviço de Barba: Pintura e Definição.' },
            { name: 'Barba: Pintura Completa', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/af/ab/9a/afab9a6b5d2f157e079c5426ee736ad4.jpg', address: 'Rua Simetria, 707', hours: '9:00 - 18:00', description: 'Descrição do serviço de Barba: Pintura Completa.' },
        ],
        HotTowelShave: [
            { name: 'Barba: Hot Towel Shave Clássico', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/ba/57/a4/ba57a41520c8d48d8aee504e704614bb.jpg', address: 'Rua Exemplo, 123', hours: '9:00 - 18:00', description: 'Descrição do serviço de Barba: Hot Towel Shave Clássico.' },
            { name: 'Barba: Hot Towel Shave Premium', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/16/3d/32/163d321c012038c8b7f5a4bb1415b15f.jpg', address: 'Rua Estilo, 456', hours: '10:00 - 19:00', description: 'Descrição do serviço de Barba: Hot Towel Shave Premium.' },
            { name: 'Barba: Hot Towel Shave Relax', price: 'R$ 120.00', stars: 4, image: 'https://i.pinimg.com/736x/d5/90/39/d590393cebdf0bcc2bce6fdea0baf4ca.jpg', address: 'Rua Elegante, 606', hours: '9:00 - 19:00', description: 'Descrição do serviço de Barba: Hot Towel Shave Relax.' },
            { name: 'Barba: Hot Towel Shave VIP', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/0a/df/22/0adf227139eb0ab777e6f5f829ede079.jpg', address: 'Rua Simetria, 707', hours: '9:00 - 18:00', description: 'Descrição do serviço de Barba: Hot Towel Shave VIP.' },
        ],
        Aromaterapia: [
            { name: 'Aromaterapia: Relaxante', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/c5/17/b9/c517b9037db4b87b04d9ebb2f7863e83.jpg', address: 'Rua Tranquilidade, 123', hours: '9:00 - 18:00', description: 'Aromaterapia com óleos essenciais para promover relaxamento profundo e alívio do estresse.' },
            { name: 'Aromaterapia: Revitalizante', price: 'R$ 120.00', stars: 4, image: 'https://i.pinimg.com/736x/51/c4/21/51c421b476d53e1cc23d3466cdb0e733.jpg', address: 'Rua Bem-Estar, 456', hours: '10:00 - 19:00', description: 'Terapia com aromas que revigoram a mente e o corpo, ideal para quem precisa de uma revitalização.' },
            { name: 'Aromaterapia: Calmante', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/3a/a9/fc/3aa9fc87b121a4fc3b52e20744199f83.jpg', address: 'Rua Serenidade, 789', hours: '8:00 - 17:00', description: 'Utilização de óleos essenciais calmantes para ajudar no alívio da ansiedade e proporcionar paz interior.' },
            { name: 'Aromaterapia: Detox', price: 'R$ 120.00', stars: 4, image: 'https://i.pinimg.com/736x/e8/6e/53/e86e530e3e2d60e6b5e805f8e431d0f5.jpg', address: 'Rua Purificação, 101', hours: '9:00 - 18:00', description: 'Aromaterapia com óleos que estimulam a desintoxicação do corpo, promovendo um bem-estar geral.' },
            { name: 'Aromaterapia: Equilíbrio Energético', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/fe/93/e5/fe93e551f05c7d4d5f0855fb05d7fbe5.jpg', address: 'Rua Harmonia, 202', hours: '9:00 - 18:00', description: 'Aromas específicos para equilibrar as energias do corpo e da mente, proporcionando sensação de equilíbrio.' },
            { name: 'Aromaterapia: Antidepressiva', price: 'R$ 120.00', stars: 4, image: 'https://i.pinimg.com/736x/81/8b/f6/818bf692f7778950def716c6c6e4ecd8.jpg', address: 'Rua Paz, 303', hours: '10:00 - 19:00', description: 'Terapia aromática com óleos que ajudam a aliviar sintomas de depressão e promovem sensação de felicidade.' },
        ],
        HotStone: [
            { name: 'Hot Stone: Terapia Relaxante', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/de/e6/71/dee67169f7f102bba0fa69f5f814aba8.jpg', address: 'Rua Tranquilidade, 123', hours: '9:00 - 18:00', description: 'Massagem com pedras quentes para relaxar os músculos e aliviar o estresse.' },
            { name: 'Hot Stone: Equilíbrio Energético', price: 'R$ 120.00', stars: 4, image: 'https://i.pinimg.com/736x/4a/44/89/4a448966b91739e435feaf2024771123.jpg', address: 'Rua Bem-Estar, 456', hours: '10:00 - 19:00', description: 'Terapia com pedras quentes que ajudam a equilibrar a energia do corpo e mente.' },
            { name: 'Hot Stone: Detox Corporal', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/98/b4/fb/98b4fbe566c71b72f65becccfd05e67b.jpg', address: 'Rua Serenidade, 789', hours: '8:00 - 17:00', description: 'Massagem com pedras quentes que ajudam na desintoxicação do corpo e melhoria da circulação.' },
            { name: 'Hot Stone: Alívio de Tensão', price: 'R$ 120.00', stars: 4, image: 'https://i.pinimg.com/736x/51/fc/55/51fc55c1d0c8b9f91dee8bdf1bdab78f.jpg', address: 'Rua Tradição, 101', hours: '9:00 - 18:00', description: 'Terapia com pedras quentes que proporciona alívio de tensões musculares e promove relaxamento.' },
            { name: 'Hot Stone: Revitalização', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/4b/22/d9/4b22d90afbda4dfe9ef3f387bfa8b02f.jpg', address: 'Rua Harmonia, 202', hours: '9:00 - 18:00', description: 'Massagem revitalizante com pedras quentes, ideal para recuperar energia e disposição.' },
            { name: 'Hot Stone: Anti-estresse', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/8b/88/a0/8b88a07d60999375d45762df8ff12785.jpg', address: 'Rua Paz, 303', hours: '10:00 - 19:00', description: 'Utilização de pedras quentes para aliviar o estresse e proporcionar uma sensação profunda de relaxamento.' },
            { name: 'Hot Stone: Terapia Rejuvenescedora', price: 'R$ 120.00', stars: 5, image: 'https://i.pinimg.com/736x/98/86/2a/98862a84cfcb81514ed875a881cdf0a2.jpg', address: 'Rua Energia, 404', hours: '9:00 - 18:00', description: 'Massagem com pedras quentes para rejuvenescimento da pele e recuperação do equilíbrio físico e mental.' },
        ]
    };
    const selectedServices = services[category] || [];

    return (
        <View style={[styles.container, { backgroundColor: isDark ? '#121212' : '#f5f5f5' }]}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                {selectedServices.length > 0 ? (
                    <View style={styles.servicesGrid}>
                        {selectedServices.map((provider, index) => (
                            <TouchableOpacity
                                key={index}
                                style={[styles.providerContainer, { backgroundColor: isDark ? '#333' : '#fff' }]}
                                onPress={() => navigation.navigate('ServiceDetail', { service: provider })}
                            >
                                <Image source={{ uri: provider.image }} style={styles.providerImage} />
                                <Text style={[styles.providerName, { color: isDark ? '#fff' : '#333' }]}>{provider.name}</Text>
                                <Text style={[styles.price, { color: isDark ? '#bbb' : '#333' }]}>Preço: {provider.price}</Text>
                                <Text style={[styles.stars, { color: isDark ? '#ffd700' : '#f39c12' }]}>Avaliação: {'★'.repeat(provider.stars)}{'☆'.repeat(5 - provider.stars)}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                ) : (
                    <Text style={styles.errorText}>Nenhum prestador encontrado para a categoria selecionada.</Text>
                )}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    scrollContainer: {
        paddingBottom: 20,
    },
    servicesGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    providerContainer: {
        borderRadius: 10,
        padding: 15,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 2 },
        width: '48%',
    },
    providerImage: {
        width: '100%',
        height: 150,
        borderRadius: 10,
        marginBottom: 10,
    },
    providerName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    price: {
        fontSize: 14,
        marginBottom: 5,
    },
    stars: {
        fontSize: 14,
    },
    errorText: {
        fontSize: 18,
        color: 'red',
        textAlign: 'center',
        marginTop: 20,
    },
});

export default ServicoDetalhesScreen;
