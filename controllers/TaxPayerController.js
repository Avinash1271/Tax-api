router.get('/list', passport.authenticate('jwt', { session: false }), authorize(['tax-payer', 'tax-accountant', 'admin']), taxController.listTaxes);

exports.listTaxes = async (req, res) => {
  try {
    const { role } = req.user; 
    let filters = {};

    if (role === 'tax-payer') {
      filters.panCard = req.user.username; 
    }

    const taxes = await Tax.find(filters);
    res.status(200).json({ taxes });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

