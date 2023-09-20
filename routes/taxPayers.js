router.post('/', passport.authenticate('jwt', { session: false }), authorize(['tax-accountant']), taxController.createTax);

exports.createTax = async (req, res) => {
  try {
    const { panCard, incomeFromSalary, incomeFromShareMarket, state } = req.body;
    const sgst = calculateSGST(state);
    const cgst = calculateCGST(state);
    const totalTax = sgst + cgst;

    const tax = new Tax({
      panCard,
      incomeFromSalary,
      incomeFromShareMarket,
      state,
      sgst,
      cgst,
      totalTax,
    });

    await tax.save();
    res.status(201).json({ message: 'Tax created successfully', tax });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

