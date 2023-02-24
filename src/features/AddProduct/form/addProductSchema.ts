import * as yup from 'yup';

export const addProductSchema = yup.object().shape({
  name: yup.string().required('El nombre es requerido'),
  price: yup.string().required('El precio es requerido'),
  stock: yup.string().required('El stock es requerido'),
  image: yup.mixed().test('file', 'La imagen es requerida', (value) => {
    const files = value as FileList;
    if (files && files.length > 0) {
      return true;
    }
    return false;
  }),
});
